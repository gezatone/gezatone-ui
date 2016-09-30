const webpack = require('webpack')
const postcssPack = require('./utils/postcss-pack')
const postxmlPack = require('postxml-pack-alanev')

module.exports = {
	entry: {
		defer: './src/defer.js',
		async: './src/async.js'
	},
	output: {
		path: './build',
		filename: '[name].js',
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint'
			}
		],
		loaders: [
			{
				test: /\.modernizrrc$/,
				loader: 'modernizr'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [
						'es2015'
					]
				}
			},
			{
				test: /\.s?css$/,
				loaders: [
					'file?name=[name].css',
					'extract',
					'css',
					'postcss'
				]
			},
			{
				test: /\.html?$/,
				loaders: [
					'file?name=[name].[ext]',
					'postxml'
				]
			},
			{
				test: /\.(jp?g|png|svg)$/,
				loaders: [
					'file?name=assets/images/[name].webp',
					'webp?{quality:50}',
					'file?name=assets/images/[name].[ext]',
					'img?optimizationLevel=5&progressive=true'
				]
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'file?name=assets/fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	postcss: postcssPack,
	postxml: postxmlPack
}
