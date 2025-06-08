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

	return (
		<Card>
			<CardHeader>
				<CardTitle>Controlled (+ all toggles)</CardTitle>
				<CardDescription>
					All features exposed via local state controls.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<JalaaliDateTimePicker
					value={value ?? undefined}
					onChange={setValue}
					onOpenChange={(o) => console.info("open:", o)}
					onClear={(prev) => console.info("cleared value was:", prev)}
					showTime
					clearable
					minuteStep={5}
					disablePast
					placeholderLabel="انتخاب تاریخ جلسه"
					formatLabel={(d) =>
						// custom nicely-formatted label
						new Intl.DateTimeFormat("fa-IR", {
							dateStyle: "full",
							timeStyle: "short",
						}).format(d)
					}
				/>

				<pre className="rounded bg-muted p-3 text-xs">
					{value ? `ISO ⇒ ${value.toISOString()}` : "no selection yet"}
				</pre>
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
				<CardTitle>Min / Max (Gregorian, inline)</CardTitle>
				<CardDescription>
					Only a 7-day window is selectable – inline mode.
				</CardDescription>
			</CardHeader>
			<CardContent>
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
					The picker provides a hidden&nbsp;<code>&lt;input/&gt;</code> that RHF
					controls via&nbsp;<code>Controller</code>.
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
