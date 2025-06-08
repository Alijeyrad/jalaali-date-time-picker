import type { Metadata, Viewport } from "next"
import { Vazirmatn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	display: "swap",
	variable: "--font-vazirmatn",
})

export const metadata: Metadata = {
	title: {
		default: "Jalaali Date-Time Picker Demo",
		template: "%s | Jalaali Date-Time Picker",
	},
	description:
		"React component for selecting Jalali (Persian) or Gregorian dates & times – keyboard accessible, headless, Tailwind-ready.",
	keywords: [
		"Jalali calendar",
		"Jalali date picker",
		"Jalaali date picker",
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
		canonical: "https://alijeyrad.github.io/jalaali-date-time-picker/",
	},
	// ───────────────────────────── social previews
	openGraph: {
		type: "website",
		locale: "fa_IR",
		url: "https://alijeyrad.github.io/jalaali-date-time-picker/",
		siteName: "Jalaali Date-Time Picker",
		title: "Jalaali Date-Time Picker – کامپوننت انتخاب تاریخ و زمان شمسی",
		description:
			"کامپوننت ری‌اکت برای انتخاب تاریخ و زمان به صورت شمسی (جلالی) یا میلادی، با پشتیبانی از Tailwind و دسترسی‌پذیری کامل.",
		images: [
			{
				url: "https://alijeyrad.github.io/jalaali-date-time-picker/og.png",
				width: 1200,
				height: 630,
				alt: "نمایی از کامپوننت Jalaali Date-Time Picker",
			},
		],
	},
	// ───────────────────────────── icons / manifest
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		shortcut: "/favicon-192.png",
	},
	manifest: "/jalaali-date-time-picker/site.webmanifest",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
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
			<body className="flex min-h-screen flex-col antialiased bg-background text-foreground font-sans">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<footer className="border-t py-4 text-center text-xs text-muted-foreground">
						© {new Date().getFullYear()}{" "}
						<Link href={"https://github.com/Alijeyrad"}>Ali Julaee Rad</Link>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	)
}
