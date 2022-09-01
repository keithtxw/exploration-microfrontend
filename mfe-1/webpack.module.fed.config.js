/**
 * THIS IS FOR THE MODULE FEDERATION IMPLEMENTATION
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	devServer: {
		port: 3001
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		}),
		new ModuleFederationPlugin({
			name: "mfe1",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./Banner": "./src/banner/banner.tsx",
			},
			shared: [
				{
					...deps,
					react: {
						singleton: true,
						eager: true,
						requiredVersion: deps.react,
					},
					"react-dom": {
						singleton: true,
						eager: true,
						requiredVersion: deps["react-dom"],
					},
					"styled-components": {
						singleton: true,
						eager: true,
						requiredVersion: deps["styled-components"],
					}
				}
			],
		})
	],
};