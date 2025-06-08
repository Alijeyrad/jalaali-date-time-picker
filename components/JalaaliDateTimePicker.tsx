"use client"

import {
	toJalaali,
	fromJalaali,
	getFirstDayOfMonth,
	getMonthDays,
	getJalaliParts,
} from "@/lib/jalaali"
import { persianMonthNames, persianWeekdaysShort } from "@/lib/locale-fa"
import {
	useCallback,
	useEffect,
	useMemo,
	useState,
	forwardRef,
	useImperativeHandle,
	type ReactNode,
	useRef,
} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

/*───────────────────────────────────────────────────────────*/
export interface InputFieldProps {
	name: string
	value: string | number | boolean | Date | null
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: () => void
	ref: (instance: HTMLInputElement | null) => void
}

export interface JalaaliDateTimePickerProps {
	className?: string
	defaultValue?: Date
	value?: Date
	minDate?: Date
	maxDate?: Date
	disablePast?: boolean
	disableFuture?: boolean
	minuteStep?: number
	disabled?: boolean
	showTime?: boolean
	format?: "jalali" | "gregorian"
	clearable?: boolean
	inline?: boolean
	trigger?: ReactNode
	formatLabel?: (d: Date) => string
	onChange?: (d: Date) => void
	onOpenChange?: (open: boolean) => void
	onClear?: (prev: Date | null) => void
	inputRef?: React.RefObject<HTMLInputElement>
	placeholderLabel?: string
	inputFieldProps?: InputFieldProps
}

export interface JalaaliDateTimePickerRef {
	getValue: () => Date | null
}

/*───────────────────────────────────────────────────────────*/
export const JalaaliDateTimePicker = forwardRef<
	JalaaliDateTimePickerRef,
	JalaaliDateTimePickerProps
>(
	(
		{
			className,
			defaultValue = new Date(),
			value,
			minDate,
			maxDate,
			disablePast = false,
			disableFuture = false,
			minuteStep = 1,
			disabled = false,
			showTime = true,
			format = "jalali",
			clearable = false,
			inline = false,
			trigger,
			formatLabel,
			onChange,
			onOpenChange,
			onClear,
			inputRef,
			placeholderLabel,
			inputFieldProps,
		},
		ref,
	) => {
		/* helpers -------------------------------------------------------------- */
		const startOf = (d: Date) =>
			new Date(d.getFullYear(), d.getMonth(), d.getDate())
		const today = startOf(new Date())

		/** resolve effective bounds */
		const rawMin = startOf(minDate ?? new Date(1970, 0, 1))
		const rawMax = startOf(maxDate ?? new Date(2100, 11, 31))
		const min = disablePast ? (rawMin > today ? rawMin : today) : rawMin
		const max = disableFuture ? (rawMax < today ? rawMax : today) : rawMax

		/* initial -------------------------------------------------------------- */
		const init = value ?? defaultValue
		const { jy: iy, jm: im, jd: id } = getJalaliParts(init)

		/* state ---------------------------------------------------------------- */
		const [open, setOpen] = useState(false)
		const [year, setYear] = useState(iy)
		const [month, setMonth] = useState(im)
		const [selectedDay, setSelectedDay] = useState(id)
		const [hour, setHour] = useState(init.getHours())
		const [minute, setMinute] = useState(init.getMinutes())
		const [confirmedDate, setConfirmedDate] = useState<Date | null>(null)
		const [error, setError] = useState<string | null>(null)

		/* keep in sync if controlled */
		useEffect(() => {
			if (!value) return
			const { jy, jm, jd } = getJalaliParts(value)
			setYear(jy)
			setMonth(jm)
			setSelectedDay(jd)
			setHour(value.getHours())
			setMinute(value.getMinutes())
			setConfirmedDate(value)
		}, [value])

		/* calendar grid -------------------------------------------------------- */
		const { weeks, daysFlat, canPrevMonth, canNextMonth } = useMemo(() => {
			const dim = getMonthDays(year, month)
			const shift = (getFirstDayOfMonth(year, month) + 1) % 7
			const all = Array.from({ length: 42 }, (_, i) => {
				const d = i - shift + 1
				return d > 0 && d <= dim ? d : null
			})
			return {
				weeks: Array.from({ length: 6 }, (_, w) => all.slice(w * 7, w * 7 + 7)),
				daysFlat: all.map((d) => d ?? -1),
				canPrevMonth: fromJalaali(year, month, 1) > min,
				canNextMonth: fromJalaali(year, month, dim) < max,
			}
		}, [year, month, min, max])

		/* final value ---------------------------------------------------------- */
		const finalDate = useMemo(() => {
			const d = fromJalaali(year, month, selectedDay)
			d.setHours(showTime ? hour : 0)
			d.setMinutes(showTime ? minute : 0)
			return d
		}, [year, month, selectedDay, hour, minute, showTime])

		/* expose ref ----------------------------------------------------------- */
		useImperativeHandle(ref, () => ({ getValue: () => confirmedDate }), [
			confirmedDate,
		])

		/* helpers for form libs --------------------------------------------- */
		const emitChange = (iso: string) => {
			if (inputFieldProps?.onChange) {
				inputFieldProps.onChange({
					target: { name: inputFieldProps.name, value: iso },
				} as any) // satisfies React.ChangeEvent<HTMLInputElement>
			}
		}
		const emitBlur = () => inputFieldProps?.onBlur?.()

		useEffect(() => {
			emitChange(confirmedDate ? confirmedDate.toISOString() : "")
		}, [confirmedDate])

		/* utils ---------------------------------------------------------------- */
		const yearOptions = useMemo(() => {
			const minJ = getJalaliParts(min).jy
			const maxJ = getJalaliParts(max).jy
			return Array.from({ length: maxJ - minJ + 1 }, (_, i) => minJ + i)
		}, [min, max])

		const isDisabledDay = useCallback(
			(d: number) => {
				const g = fromJalaali(year, month, d)
				return g < min || g > max
			},
			[year, month, min, max],
		)

		const formatBuiltIn = (d: Date) =>
			format === "gregorian"
				? d.toLocaleDateString("fa-IR", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})
				: toJalaali(d)

		const labelText = confirmedDate
			? formatLabel
				? formatLabel(confirmedDate)
				: formatBuiltIn(confirmedDate)
			: undefined

		/* keyboard nav helper -------------------------------------------------- */
		const moveSelection = useCallback(
			(delta: number) => {
				const curIdx = daysFlat.findIndex((d) => d === selectedDay)
				let idx = curIdx + delta
				while (idx >= 0 && idx < daysFlat.length && daysFlat[idx] === -1) {
					idx += delta > 0 ? 1 : -1
				}
				const nextDay = daysFlat[idx]
				if (nextDay !== undefined && nextDay !== -1) setSelectedDay(nextDay)
			},
			[daysFlat, selectedDay],
		)

		/* submit --------------------------------------------------------------- */
		const submit = useCallback(() => {
			if (finalDate < min || finalDate > max) {
				setError("تاریخ خارج از محدوده مجاز است")
				return
			}
			setError(null)
			setConfirmedDate(finalDate)
			emitChange(finalDate.toISOString())
			if (!inline) setOpen(false)
			onChange?.(finalDate)
			inputRef?.current?.setAttribute("value", finalDate.toISOString())
		}, [finalDate, inline, min, max, onChange, inputRef])

		/* presets & clear ------------------------------------------------------ */
		const clearSelection = useCallback(() => {
			onClear?.(confirmedDate)
			setConfirmedDate(null)
			emitChange("")
			inputRef?.current?.setAttribute("value", "")
		}, [onClear, confirmedDate, inputRef])

		const applyPreset = useCallback((d: Date) => {
			const { jy, jm, jd } = getJalaliParts(d)
			setYear(jy)
			setMonth(jm)
			setSelectedDay(jd)
			setHour(d.getHours())
			setMinute(d.getMinutes())
		}, [])

		/* hidden input ------------------------------------------------------- */
		const hiddenInputRef = useRef<HTMLInputElement | null>(null)
		const HiddenField = (
			<input
				type="hidden"
				{...(inputFieldProps ?? {})}
				ref={inputFieldProps?.ref ? inputFieldProps.ref : hiddenInputRef}
				value={confirmedDate ? confirmedDate.toISOString() : ""}
			/>
		)

		/* --- UI parts --------------------------------------------------------- */
		const TopControls = (
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<Button
						size="icon"
						variant="ghost"
						onClick={() =>
							canNextMonth &&
							(month === 12
								? (setMonth(1), setYear((y) => y + 1))
								: setMonth((m) => m + 1))
						}
						disabled={!canNextMonth}
						aria-label="ماه بعد"
					>
						<ChevronRight className="w-4 h-4" />
					</Button>

					<div className="font-semibold w-24 text-center">
						{persianMonthNames[month - 1]}
					</div>

					<Button
						size="icon"
						variant="ghost"
						onClick={() =>
							canPrevMonth &&
							(month === 1
								? (setMonth(12), setYear((y) => y - 1))
								: setMonth((m) => m - 1))
						}
						disabled={!canPrevMonth}
						aria-label="ماه قبل"
					>
						<ChevronLeft className="w-4 h-4" />
					</Button>
				</div>

				<Select value={year.toString()} onValueChange={(v) => setYear(+v)}>
					<SelectTrigger className="w-[96px]">
						<SelectValue placeholder="سال" />
					</SelectTrigger>
					<SelectContent>
						{yearOptions.map((y) => (
							<SelectItem
								key={y}
								value={y.toString()}
								disabled={
									fromJalaali(y, 12, 29) < min || fromJalaali(y, 1, 1) > max
								}
							>
								{y}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		)

		const CalendarTable = (
			<div
				onKeyDown={(e) => {
					switch (e.key) {
						case "ArrowLeft":
							moveSelection(-1)
							e.preventDefault()
							break
						case "ArrowRight":
							moveSelection(1)
							e.preventDefault()
							break
						case "ArrowUp":
							moveSelection(-7)
							e.preventDefault()
							break
						case "ArrowDown":
							moveSelection(7)
							e.preventDefault()
							break
						case "Enter":
							submit()
							e.preventDefault()
							break
					}
				}}
			>
				<table className="w-full">
					<thead>
						<tr>
							{persianWeekdaysShort.map((d) => (
								<th
									key={d}
									className="text-center text-sm font-medium text-muted-foreground"
								>
									{d}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{weeks.map((wk, wi) => (
							<tr key={wi}>
								{wk.map((d, di) => (
									<td key={di} className="p-0">
										{d ? (
											<Button
												size="sm"
												className="w-full hover:ring ring-primary/40"
												variant={d === selectedDay ? "default" : "ghost"}
												onClick={() => !isDisabledDay(d) && setSelectedDay(d)}
												disabled={isDisabledDay(d)}
												aria-selected={d === selectedDay}
											>
												{d}
											</Button>
										) : (
											<span className="inline-block h-9 w-full" />
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)

		const TimeSelectors = showTime && (
			<div className="flex gap-6 justify-center mt-2">
				{[
					{
						label: "ساعت",
						value: hour,
						inc: () => setHour((h) => (h + 1) % 24),
						dec: () => setHour((h) => (h + 23) % 24),
					},
					{
						label: "دقیقه",
						value: minute,
						inc: () => setMinute((m) => (m + minuteStep) % 60),
						dec: () => setMinute((m) => (m - minuteStep + 60 * 60) % 60),
					},
				].map(({ label, value, inc, dec }) => (
					<div key={label} className="flex flex-col items-center">
						<span className="text-sm mb-1">{label}</span>
						<div className="flex items-center gap-1">
							<Button size="icon" variant="ghost" onClick={inc}>
								<ChevronUp className="h-3.5 w-3.5" />
							</Button>
							<span className="w-10 text-center">
								{value.toString().padStart(2, "0")}
							</span>
							<Button size="icon" variant="ghost" onClick={dec}>
								<ChevronDown className="h-3.5 w-3.5" />
							</Button>
						</div>
					</div>
				))}
			</div>
		)

		const Actions = (
			<div className="flex gap-2 mt-4">
				<Button variant="secondary" onClick={() => applyPreset(new Date())}>
					الان
				</Button>
				<Button
					variant="secondary"
					onClick={() => {
						const t = new Date()
						t.setDate(t.getDate() + 1)
						applyPreset(t)
					}}
				>
					فردا
				</Button>
				{clearable && (
					<Button variant="outline" onClick={clearSelection}>
						پاک کردن
					</Button>
				)}
				<Button onClick={submit}>ثبت</Button>
			</div>
		)

		const placeholder =
			placeholderLabel ?? (showTime ? "انتخاب تاریخ و زمان" : "انتخاب تاریخ")

		/* inline --------------------------------------------------------------- */
		if (inline) {
			return (
				<>
					{HiddenField}
					<div
						className={cn(
							"p-4 space-y-4 border rounded-lg bg-background max-w-md mx-auto",
							className,
						)}
					>
						{TopControls}
						{CalendarTable}
						{TimeSelectors}
						{Actions}
						{error && (
							<p className="text-sm text-destructive text-center mt-2">
								{error}
							</p>
						)}
					</div>
				</>
			)
		}

		/* sheet --------------------------------------------------------------- */
		const handleOpenChange = (o: boolean) => {
			if (!disabled) {
				setOpen(o)
				onOpenChange?.(o)
			}
		}

		return (
			<>
				{HiddenField}
				<Sheet open={open} onOpenChange={handleOpenChange}>
					<SheetTrigger asChild className="w-fit">
						{trigger ?? (
							<Button variant="outline" disabled={disabled}>
								{confirmedDate ? (
									<span className="text-sm text-muted-foreground">
										{showTime
											? `${hour.toString().padStart(2, "0")}:${minute
													.toString()
													.padStart(2, "0")} - `
											: ""}
										{labelText}
									</span>
								) : (
									placeholder
								)}
							</Button>
						)}
					</SheetTrigger>

					<SheetContent
						side="bottom"
						className={cn("max-w-md mx-auto", className)}
					>
						<SheetHeader className="text-center">
							<SheetTitle>
								{showTime ? "انتخاب تاریخ و زمان" : "انتخاب تاریخ"}
							</SheetTitle>
							<SheetDescription>
								{showTime
									? "تاریخ و زمان را انتخاب کنید"
									: "تاریخ را انتخاب کنید"}
							</SheetDescription>
						</SheetHeader>

						<div className="p-4 space-y-4">
							{TopControls}
							{CalendarTable}
							{TimeSelectors}
							{Actions}
							{error && (
								<p className="text-sm text-destructive text-center mt-2">
									{error}
								</p>
							)}
						</div>
					</SheetContent>
				</Sheet>
			</>
		)
	},
)

JalaaliDateTimePicker.displayName = "JalaaliDateTimePicker"
