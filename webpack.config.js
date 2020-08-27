const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js(x)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(sc|sa|c)?ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader',
			},
			{
				test: /\.(png|jpe?g)/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: './src/assets/images/[name].[ext]',
							limit: 10000,
						},
					},
					{
						loader: 'img-loader',
					},
				],
			},
		],
	},
	devServer: {
		// Development server watches public and src for changes and HMR
		contentBase: ['./public', './src'],
		watchContentBase: true,
		inline: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html',
			favicon: './public/favicon.svg',
		}),
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
/* 		new InterpolateHtmlPlugin({
			PUBLIC_URL: '',

		}), 
*/
		new MiniCssExtractPlugin({
			//minify scss to styles.css
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
	],

};
