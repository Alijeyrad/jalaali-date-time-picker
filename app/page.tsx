"use client"

import Script from "next/script"
import { useState } from "react"
import { ShamsiDateTimePicker } from "@/components/ShamsiDateTimePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { ModeToggle } from "@/components/ModeToggle"

export default function Home() {
	const [showTime, setShowTime] = useState(true)
	const [inline, setInline] = useState(false)
	const [clearable, setClearable] = useState(true)
	const [format, setFormat] = useState<"jalali" | "gregorian">("jalali")
	const [minuteStep, setMinuteStep] = useState(1)
	const [selected, setSelected] = useState<Date | null>(null)

	/* ───────────── JSON-LD for SEO / rich-results ─ */
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Shamsi Date-Time Picker",
		applicationCategory: "DeveloperApplication",
		operatingSystem: "All",
		programmingLanguage: "TypeScript",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
	}

	return (
		<>
			{/* Google & co. will pick this up */}
			<Script
				id="structured-data"
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<main className="container mx-auto px-4 py-10 space-y-8">
				{/* HEADER */}
				<header className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<ModeToggle />
					</div>
					<h1 className="text-2xl font-bold text-center">
						Shamsi&nbsp;Date-Time Picker Demo
					</h1>
				</header>

				{/* PICKER */}
				<div className="flex justify-center">
					<ShamsiDateTimePicker
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
			</main>
		</>
	)
}
