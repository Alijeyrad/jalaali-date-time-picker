import Link from "next/link"
import Script from "next/script"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import PropsTable from "@/components/propsTable"

export const metadata: Metadata = {
	title: "مستندات Jalaali Date-Time Picker",
	description:
		"مستندات کامل کامپوننت ری‌اکت Jalaali Date-Time Picker برای انتخاب تاریخ شمسی و میلادی در Next.js.",
	keywords: [
		"Jalaali date picker",
		"Persian date picker",
		"React Jalali calendar",
		"Shamsi datetime picker",
		"Tailwind date picker",
		"Next.js datepicker",
		"ShadCN component",
		"شمسی",
		"تاریخ شمسی",
		"کامپوننت ری‌اکت",
	],
	openGraph: {
		title: "مستندات Jalaali Date-Time Picker",
		description:
			"راهنمای کامل استفاده از Jalaali Date-Time Picker برای پروژه‌های React و Next.js با پشتیبانی از Tailwind و ShadCN.",
		url: "https://alijeyrad.github.io/jalaali-date-time-picker/docs",
		images: [
			{
				url: "https://alijeyrad.github.io/jalaali-date-time-picker/og.png",
				width: 1200,
				height: 630,
				alt: "نمایش مستندات Jalaali Date-Time Picker",
			},
		],
		locale: "fa_IR",
		type: "article",
	},
	alternates: {
		canonical: "https://alijeyrad.github.io/jalaali-date-time-picker/docs",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
}

export default function DocsPage() {
	const InlineCode = (p: React.ComponentProps<"code">) => (
		<code className="rounded bg-muted px-1 py-0.5 text-[0.85em] font-mono">
			{p.children}
		</code>
	)

	const SubTitle = ({ children }: { children: React.ReactNode }) => (
		<h2 className="mt-10 scroll-m-24 text-xl font-semibold tracking-tight">
			{children}
		</h2>
	)

	const structuredData = {
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
	}

	return (
		<>
			<Script
				id="structured-data"
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<main className="mx-auto max-w-4xl px-4 py-12 lg:px-0" dir="ltr">
				{/* ---- header ---- */}
				<header className="mb-12 flex flex-col items-center gap-4 text-center">
					<h1 className="text-3xl font-bold tracking-tight">
						Jalaali&nbsp;Date-Time&nbsp;Picker
					</h1>
					<p className="max-w-lg text-balance text-muted-foreground">
						Production-ready Jalali (Persian){" "}
						<InlineCode>date + time</InlineCode> picker for{" "}
						<strong>React / Next.js</strong>.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-2">
						<Badge variant="secondary">Fully typed</Badge>
						<Badge variant="secondary">Tree-shakable ESM</Badge>
						<Badge variant="secondary">Tailwind + ShadCN</Badge>
						<Badge variant="secondary">Keyboard nav</Badge>
					</div>

					<a
						href="https://www.npmjs.com/package/jalaali-date-time-picker"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://img.shields.io/npm/v/jalaali-date-time-picker.svg"
							alt="npm version"
						/>
					</a>
				</header>

				<Card>
					<CardHeader>
						<CardTitle>Installation</CardTitle>
						<CardDescription>
							Add the package & its peer-dependencies.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<pre className="rounded-lg bg-muted p-4 text-sm leading-6">
							<code className="font-mono">
								npm install jalaali-date-time-picker
								{"\n"}
								npm install react react-dom tailwindcss
							</code>
						</pre>

						<Separator />
						<SubTitle>Tailwind configuration</SubTitle>
						<p>
							Include the component files so Tailwind can tree-shake unused
							styles:
						</p>
						<pre className="rounded-lg bg-muted p-4 text-sm leading-6">
							<code className="font-mono">
								{`// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/jalaali-date-time-picker/dist/**/*.{js,mjs}",
  ],
};`}
							</code>
						</pre>

						<Separator />
						<SubTitle>RTL support</SubTitle>
						<p>Wrap with:</p>
						<pre className="rounded-lg bg-muted p-4 text-sm leading-6">
							<code className="font-mono">{`<div lang="fa" dir="rtl">...</div>`}</code>
						</pre>

						<Separator />
						<SubTitle>Quick usage</SubTitle>
						<pre className="rounded-lg bg-muted p-4 text-sm leading-6">
							<code className="font-mono">
								{`import { JalaaliDateTimePicker } from "jalaali-date-time-picker";

export default function Example() {
  return (
    <div dir="rtl">
      <JalaaliDateTimePicker onChange={(d) => console.log(d)} />
    </div>
  );
}`}
							</code>
						</pre>

						<Button asChild variant="secondary" className="mt-4">
							<Link
								href="https://alijeyrad.github.io/jalaali-date-time-picker/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Live Demo ↗
							</Link>
						</Button>

						<PropsTable />

						<Separator />
						<SubTitle>Project&nbsp;Goals</SubTitle>
						<p className="mb-3">
							Make the package as lightweight and dependency-free as possible.
						</p>
						<ul className="list-disc pl-5 leading-relaxed space-y-1">
							<li>✅ Icons optimized – removed <InlineCode>lucide-react</InlineCode> dependency</li>
							<li>Add headless base for custom theming.</li>
							<li>Support accessibility & language switching.</li>
						</ul>

						<Separator />
						<SubTitle>Contributing</SubTitle>
						<p>
							Fork, dev, open PR. Use <InlineCode>pnpm cz</InlineCode> to
							commit.
						</p>

						<Separator />
						<SubTitle>Author</SubTitle>
						<p>
							<Link
								href="https://github.com/alijeyrad"
								className="inline-flex items-center gap-1 font-medium hover:underline"
							>
								Ali&nbsp;Julaee&nbsp;Rad <ExternalLink className="h-3 w-3" />
							</Link>
						</p>
					</CardContent>
				</Card>
			</main>
		</>
	)
}
