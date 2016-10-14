const { watch } = require('chokidar')
const { createReadStream: read, createWriteStream: write } = require('fs')
const name = './src/index.html'
const watchOptions = {
	ignoreInitial: true
}

watch(['modules/*/*.htm'], watchOptions)
	.on('all', (e, path) => {
		read(name)
			.pipe(write(name))
		console.log(e, path, ' done')
	})
