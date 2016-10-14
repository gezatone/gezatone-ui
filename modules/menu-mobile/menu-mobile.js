
const menuElement = document.querySelector('.menu-mobile')
const classes = [
	'menu',
	'menu-pages',
	'phone'
]
const targets = classes.map(className => {
	return {
		name: className,
		element: document.querySelector(`.${className}`)
	}
})

const menuMobile = {
	mobile () {
		targets.forEach(({ element, name }) => {
			if (element) {
				const clone = element.cloneNode(true)
				clone.classList.remove(`${name}--desktop`)
				clone.classList.add(`${name}--mobile`)
				menuElement.appendChild(clone)
			}
		})
	},
	desktop () {
		classes.forEach(className => {
			const element = document.querySelector(`.${className}--mobile`)
			console.log(element)
			if (element) {
				element.remove()
			}
		})
	}
}

module.exports = menuMobile
