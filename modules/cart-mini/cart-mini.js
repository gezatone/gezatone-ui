const cartElement = document.querySelector('.g-page__cart')
const className = 'cart-mini'
const target = document.querySelector(`.${className}`)

const cart = {
	mobile () {
		if (cartElement && target) {
			const clone = target.cloneNode(true)
			clone.classList.remove(`${className}--desktop`)
			clone.classList.add(`${className}--mobile`)
			cartElement.appendChild(clone)
		}
	},
	desktop () {
		const cartMobileElement = document.querySelector(`.${className}--mobile`)
		if (cartMobileElement) {
			cartMobileElement.remove()
		}
	}
}

module.exports = cart
