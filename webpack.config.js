const webpack = require('webpack')
const postcssConfig = require('./utils/postcss-config')
const postxmlPack = require('postxml-pack-alanev')

const production = process.env.NODE_ENV === 'production'

const config = {
	entry: {
		defer: './src/defer.js',
		async: './src/async.js'
	},
	output: {
		path: './build',
		filename: '[name].js',
		sourceMapFilename: '[file].map'
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
					`postcss${production ? '?sourceMap=inline' : ''}`
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	postcss: postcssConfig,
	postxml: postxmlPack
}

if (production) {
	config.devtool = 'source-map'
	config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
