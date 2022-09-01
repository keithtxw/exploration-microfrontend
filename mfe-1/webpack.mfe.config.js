const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const publicPath = "/dist/";

const baseBuildConfig = {
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
		port: 3002
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		})
	]
};

module.exports = [
	{
		...baseBuildConfig,
		entry: "./src/banner/banner-exportable.tsx",
		output: {
			path: path.resolve(__dirname, "./dist/"),
			publicPath,
			filename: "banner.js",
			chunkFilename: "banner.chunk.js",
			library: "MFE1",
			libraryTarget: "umd"
		}
	}
]