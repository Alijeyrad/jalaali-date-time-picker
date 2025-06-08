"use client"

import { useState } from "react"
import { JalaaliDateTimePicker } from "@/components/JalaaliDateTimePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import Script from "next/script"

export default function Home() {
	const [showTime, setShowTime] = useState(true)
	const [inline, setInline] = useState(false)
	const [clearable, setClearable] = useState(true)
	const [format, setFormat] = useState<"jalali" | "gregorian">("jalali")
	const [minuteStep, setMinuteStep] = useState(1)
	const [selected, setSelected] = useState<Date | null>(null)

	return (
		<section className="container mx-auto px-4 py-10 space-y-8">
			<h1 className="text-2xl font-bold text-center">
				Jalaali&nbsp;Date-Time&nbsp;Picker Demo
			</h1>

			{/* Picker */}
			<div className="flex justify-center">
				<JalaaliDateTimePicker
					value={selected ?? undefined}
					onChange={setSelected}
					showTime={showTime}
					clearable={clearable}
					inline={inline}
					format={format}
					minuteStep={minuteStep}
					className="w-full"
				/>
			</div>

			{/* CONTROL PANEL */}
			<section className="space-y-4 py-4 text-left">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<Button
						variant={showTime ? "default" : "outline"}
						onClick={() => setShowTime((s) => !s)}
					>
						{showTime ? "hide time ⏱️" : "show time ⏱️"}
					</Button>

					<Button
						variant={inline ? "default" : "outline"}
						onClick={() => setInline((s) => !s)}
					>
						{inline ? "sheet mode" : "inline mode"}
					</Button>

					<Button
						variant={clearable ? "default" : "outline"}
						onClick={() => setClearable((c) => !c)}
					>
						{clearable ? "non-clearable" : "clearable"}
					</Button>

					<Select value={format} onValueChange={(v) => setFormat(v as any)}>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="format" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="jalali">jalali</SelectItem>
							<SelectItem value="gregorian">gregorian</SelectItem>
						</SelectContent>
					</Select>

					<Input
						type="number"
						min={1}
						max={30}
						value={minuteStep}
						onChange={(e) => setMinuteStep(Number(e.target.value))}
						className="w-full"
						placeholder="minuteStep"
					/>

					<Button variant="destructive" onClick={() => setSelected(null)}>
						Reset value
					</Button>
				</div>

				<pre className="bg-muted/30 p-3 rounded text-xs">
					{selected
						? `Selected ISO → ${selected.toISOString()}`
						: "No value yet"}
				</pre>
			</section>

			<Script
				id="structured-data"
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Jalaali Date-Time Picker",
						applicationCategory: "DeveloperApplication",
						operatingSystem: "All",
						programmingLanguage: "TypeScript",
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "USD",
						},
						author: {
							"@type": "Person",
							name: "Ali Julaee Rad",
							url: "https://github.com/alijeyrad",
						},
					}),
				}}
			/>
		</section>
	)
}
