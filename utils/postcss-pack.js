module.exports = function (webpack) {
	return [
		require('postcss-import')({
			addDependencyTo: webpack
		}),

		require('postcss-property-shorthand')({
			syntax: 'scss'
		}),

		require('postcss-if-media')(),
		require('postcss-mixins')(),
		require('postcss-nested')(),
		require('postcss-extend')(),
		require('postcss-simple-vars')(),
		require('postcss-each')(),

		// Future css
		// require('postcss-autoreset'(),
		require('postcss-cssnext')(),

		// Helpers (shortcuts)
		require('postcss-focus')(),
		require('postcss-short')(),
		require('lost')({
			gutter: '0',
			flexbox: 'flex'
		}),
		require('webpcss').default({
			webpClass: '.u-support--webp',
			noWebpClass: '.u-support--no-webp',
		}),

		// Libs
		require('postcss-animation')(),
		require('postcss-brand-colors')(),

		// Optimisations
		require('css-mqpacker')(),
		require('cssnano')({
			core: false,
			autoprefixer: false
		})
	]
}
