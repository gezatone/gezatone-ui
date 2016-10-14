const glob = require('./prms')(require('glob'))
const mkdrip = require('./prms')(require('mkdirp'))
const { parse } = require('path')
const { createReadStream: read, createWriteStream: write } = require('fs')

glob('modules/g-fonts/*.woff')
	.then(paths => {
		mkdrip('build/assets/fonts')
			.then(() => {
				paths.forEach(path => {
					read(path)
						.pipe(write(`build/assets/fonts/${parse(path).base}`))
				})
			})
	})
