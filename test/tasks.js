import test from 'ava'
import stat from '../utils/stat'
import exec from '../utils/exec'

const tasks = [
	{
		name: 'build',
		output:
		[
			'index.html',
			'styles.css',
			'async.js',
			'async.js.map',
			'defer.js',
			'defer.js.map',
			'assets/fonts'
		]
	},
	{
		name: 'build --production',
		output:
		[
			'index.html',
			'styles.css',
			'async.js',
			'defer.js',
			'assets/fonts',
			'assets/placehold'
		]
	}
]

test.beforeEach('remove build dir', () => {
	return exec('rm -rf ../build/')
		.then(() => {
			console.log('Build folder is removed')
		})
})

tasks.forEach(({ name, output }) => {
	test(
		`${name} task`,
		t => exec(`npm run ${name}`)
			.then(() => {
				return Promise
					.all(output.map(path => stat(`../build/${path}`)))
					.then(() => {
						t.pass()
					})
					.catch(({ path }) => {
						t.fail(`Err: ${path} doesn't exist`)
					})
			})
			.catch(err => t.fail(`Err: ${err}`))
	)
})
