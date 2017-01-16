const request = require('request')
const { parse: parseUrl } = require('url')
const { createWriteStream } = require('fs')
const mkdrip = require('mkdrip')

const production = process.env.NODE_ENV === 'production'

const plugins = [
	require('postxml-import')({
		path (attr) {
			if (!/(\\|\/|\.|--)/.test(attr))
				return `modules/${attr}/${attr}.htm`
			if (/--/.test(attr))
				return `modules/${attr.replace(/--.+$/, '')}/${attr}.htm`
			return attr
		}
	}),
	require('postxml-beml')(),
	require('postxml-imgalt')(),
	require('postxml-placeholder')({
		url: 'http://placehold.alanev.ru/'
	}),
	require('postxml-image-size')({
		cwd: 'build'
	}),
	require('postxml-wrap')(),
	require('postxml-repeat')(),
	require('postxml-icon')()
]

if (production) {
	plugins.push(
		(() => {
			const selector = [
				'img[src^="http://placehold.alanev.ru/"]',
				'img[srcset^="http://placehold.alanev.ru/"]',
				'source[srcset^="http://placehold.alanev.ru/"]'
			].join(',')
			return $ => {
				mkdrip('build/assets/placehold', (err) => {
					if (!err) {
						$(selector)
							.map((index, item) => {
								const attr = $(item).attr('src') ? 'src' : 'srcset'
								const value = $(item).attr(attr)
								const name = parseUrl(`${value}.jpg`).path.slice(1).replace('/', '-')

								$(item).attr(attr, `assets/placehold/${name}`)
								return value
							})
							.get()
							.filter((item, index, arr) => {
								return arr.indexOf(item) == index
							})
							.forEach((image, index) => {
								const name = parseUrl(`${image}.jpg`).path.slice(1).replace('/', '-')

								setTimeout(() => {
									request(`${image}.jpg`)
										.pipe(createWriteStream(`build/assets/placehold/${name}`))
								}, index * 500)
							})
					}
				})
			}
		})()
	)
}

module.exports = plugins
