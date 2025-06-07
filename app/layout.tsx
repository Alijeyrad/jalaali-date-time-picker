import type { Metadata, Viewport } from "next"
import { Vazirmatn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	display: "swap",
	variable: "--font-vazirmatn",
})

export const metadata: Metadata = {
	title: {
		default: "Shamsi Date-Time Picker Demo",
		template: "%s | Shamsi Date-Time Picker",
	},
	description:
		"React component for selecting Jalali (Persian) or Gregorian dates & times – keyboard accessible, headless, Tailwind-ready.",
	keywords: [
		"Jalali calendar",
		"Jalali date picker",
		"Shamsi date picker",
		"Persian date picker",
		"React time picker",
		"React date picker",
		"Next.js component",
		"Next.js Jalali",
		"Next.js Persian",
		"Next.js date picker",
	],
	// ───────────────────────────── canonical / hreflang
	alternates: {
		canonical: "https://shamsi-calendar.dev/",
	},
	// ───────────────────────────── social previews
	openGraph: {
		type: "website",
		locale: "fa_IR",
		url: "https://shamsi-calendar.dev/",
		siteName: "Shamsi Date-Time Picker",
		title: "Shamsi Date-Time Picker – کامپوننت انتخاب تاریخ و زمان شمسی",
		description:
			"کامپوننت ری‌اکت برای انتخاب تاریخ و زمان به صورت شمسی (جلالی) یا میلادی، با پشتیبانی از Tailwind و دسترسی‌پذیری کامل.",
		images: [
			{
				url: "https://shamsi-calendar.dev/og.png",
				width: 1200,
				height: 630,
				alt: "نمایی از کامپوننت Shamsi Date-Time Picker",
			},
		],
	},
	// ───────────────────────────── icons / manifest
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		shortcut: "/favicon-192.png",
	},
	manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
	themeColor: "#ffffff",
	colorScheme: "light dark",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
}

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode
}) {
	return (
		<html
			lang="fa"
			dir="rtl"
			className={vazirmatn.variable}
			suppressHydrationWarning
		>
			<body className="antialiased bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
