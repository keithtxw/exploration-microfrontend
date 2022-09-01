/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"mol-nprod-app-assets.s3-ap-southeast-1.amazonaws.com",
			"mol-prod-app-assets.s3-ap-southeast-1.amazonaws.com",
		],
	}
}

module.exports = nextConfig;
