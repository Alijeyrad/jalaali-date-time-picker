import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	basePath: "/jalaali-date-time-picker",
	assetPrefix: "/jalaali-date-time-picker",

	output: "export",
	trailingSlash: true,
	images: { unoptimized: true },
}

export default nextConfig
