"use client"

import { useState } from "react"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { JalaaliDateTimePicker } from "@/components/JalaaliDateTimePicker"

/* ---------- ❶ simple controlled picker -------------------------------- */
function ControlledExample() {
	const [value, setValue] = useState<Date | null>(null)
	const [showTime, setShowTime] = useState(true)
	const [clearable, setClearable] = useState(true)
	const [disablePast, setDisablePast] = useState(false)
	const [disableFuture, setDisableFuture] = useState(false)
	const [format, setFormat] = useState<"jalali" | "gregorian">("jalali")
	const [minuteStep, setMinuteStep] = useState(5)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Controlled</CardTitle>
				<CardDescription>
					All features exposed via local state controls and interactive toggles.
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-4" dir="rtl">
				<JalaaliDateTimePicker
					inline
					value={value ?? undefined}
					onChange={setValue}
					onOpenChange={(o) => console.info("open:", o)}
					onClear={(prev) => console.info("cleared value was:", prev)}
					showTime={showTime}
					clearable={clearable}
					disablePast={disablePast}
					disableFuture={disableFuture}
					placeholderLabel="انتخاب تاریخ جلسه"
					format={format}
					minuteStep={minuteStep}
					formatLabel={(d) =>
						new Intl.DateTimeFormat("fa-IR", {
							dateStyle: "full",
							timeStyle: "short",
						}).format(d)
					}
				/>

				<pre className="rounded bg-muted p-3 text-xs">
					{value ? `ISO ⇒ ${value.toISOString()}` : "no selection yet"}
				</pre>

				{/* Feature toggles */}
				<div className="flex flex-wrap gap-4 items-center text-sm">
					<label className="flex items-center gap-1">
						<input
							type="checkbox"
							checked={showTime}
							onChange={() => setShowTime(!showTime)}
						/>
						<span>showTime</span>
					</label>
					<label className="flex items-center gap-1">
						<input
							type="checkbox"
							checked={clearable}
							onChange={() => setClearable(!clearable)}
						/>
						<span>clearable</span>
					</label>
					<label className="flex items-center gap-1">
						<input
							type="checkbox"
							checked={disableFuture}
							onChange={() => setDisableFuture(!disableFuture)}
						/>
						<span>disableFuture</span>
					</label>
					<label className="flex items-center gap-1">
						<input
							type="checkbox"
							checked={disablePast}
							onChange={() => setDisablePast(!disablePast)}
						/>
						<span>disablePast</span>
					</label>
					<label className="flex items-center gap-1">
						<span>format:</span>
						<select
							value={format}
							onChange={(e) =>
								setFormat(e.target.value as "jalali" | "gregorian")
							}
							className="border rounded px-1 py-0.5"
						>
							<option value="jalali">jalali</option>
							<option value="gregorian">gregorian</option>
						</select>
					</label>
					<label className="flex items-center gap-1">
						<span>minuteStep:</span>
						<input
							type="number"
							value={minuteStep}
							min={1}
							max={30}
							onChange={(e) => setMinuteStep(Number(e.target.value))}
							className="w-16 border rounded px-1 py-0.5"
						/>
					</label>
				</div>
			</CardContent>
		</Card>
	)
}

/* ---------- ❷ min / max, Gregorian, inline --------------------------- */
function ConstraintExample() {
	const tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)
	const nextWeek = new Date()
	nextWeek.setDate(nextWeek.getDate() + 7)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Min / Max</CardTitle>
				<CardDescription>
					Only a 7-day window is selectable – inline mode.
				</CardDescription>
			</CardHeader>
			<CardContent dir="rtl">
				<JalaaliDateTimePicker
					defaultValue={tomorrow}
					minDate={tomorrow}
					maxDate={nextWeek}
					inline
					showTime={false}
					format="gregorian"
					minuteStep={15}
				/>
			</CardContent>
		</Card>
	)
}

/* ---------- ❸ disabled picker (read-only) ---------------------------- */
function DisabledExample() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Disabled</CardTitle>
			</CardHeader>
			<CardContent>
				<JalaaliDateTimePicker disabled placeholderLabel="غیرفعال" />
			</CardContent>
		</Card>
	)
}

/* ---------- ❹ React-Hook-Form showcase ------------------------------- */
type FormValues = { expires_at: string }

function RHFExample() {
	const { handleSubmit, control, reset } = useForm<FormValues>({
		defaultValues: { expires_at: "" },
	})

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		alert(JSON.stringify(data, null, 2))
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>React-Hook-Form integration</CardTitle>
				<CardDescription>
					This picker exposes a hidden <code>&lt;input /&gt;</code> element with
					full control support, making it seamlessly compatible with popular
					form libraries like <strong>React Hook Form</strong>,{" "}
					<strong>Formik</strong>, or any system expecting a traditional form
					input. You can pass <code>name</code>, <code>value</code>,{" "}
					<code>onChange</code>, and <code>onBlur</code> through the{" "}
					<code>inputFieldProps</code> prop to integrate with any form
					controller. Internally, it updates the hidden input's value in ISO
					8601 format, ensuring it works with validation, submission, and data
					binding workflows.
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-4">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<Controller
						name="expires_at"
						control={control}
						render={({ field }) => (
							<JalaaliDateTimePicker
								// give RHF the bridge:
								inputFieldProps={field}
								clearable
								showTime
							/>
						)}
					/>

					<div className="flex gap-2">
						<Button type="submit">Submit</Button>
						<Button type="button" variant="outline" onClick={() => reset()}>
							Reset form
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}

/* ---------- exported playground component ---------------------------- */
export default function PickerPlayground() {
	return (
		<section
			className="container mx-auto max-w-4xl space-y-10 px-4 py-12"
			dir="ltr"
		>
			<ControlledExample />
			<Separator />
			<ConstraintExample />
			<Separator />
			<DisabledExample />
			<Separator />
			<RHFExample />
		</section>
	)
}
