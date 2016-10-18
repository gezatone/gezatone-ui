const { watch } = require('chokidar')
const { readFileSync: read, writeFileSync: write } = require('fs')
const name = './src/index.html'
const watchOptions = {
	ignoreInitial: true
}

watch(['modules/*/*.htm'], watchOptions)
	.on('all', (e, path) => {
		write(name, read(name))
		console.log(e, path, ' done')
	})
