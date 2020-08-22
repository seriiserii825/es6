var webpack = require("webpack");
var path = require("path");
var htmlPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	plugins: [
		new htmlPlugin
	],
	watch: true,
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
