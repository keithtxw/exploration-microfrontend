/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"mol-nprod-app-assets.s3-ap-southeast-1.amazonaws.com",
			"mol-prod-app-assets.s3-ap-southeast-1.amazonaws.com",
		],
	},
	webpack: (config, options) => {
		const { ModuleFederationPlugin } = options.webpack.container;
		config.plugins.push(
			new ModuleFederationPlugin({
				name: "main-app",
				remotes: {
					"mfe1": "mfe1@http://localhost:3001/remoteEntry.js"
				},
				shared: []
			})
		);

		return config;
	}
}

module.exports = nextConfig;
