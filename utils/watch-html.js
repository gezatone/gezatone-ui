const { watch } = require('chokidar')
const { readFileSync, writeFileSync } = require('fs')
const name = './src/index.html'
const watchOptions = {
	ignoreInitial: true
}

watch(['modules/*/*.htm'], watchOptions)
	.on('all', (e, path) => {
		writeFileSync(name, readFileSync(name))
		console.log(e, path, ' done')
	})
