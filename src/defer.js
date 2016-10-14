require('./styles.css')
require('./index.html')

document.addEventListener('DOMContentLoaded', function () {
	require('../modules/carousel-main/carousel-main.js')
	require('../modules/carousel-catalog/carousel-catalog.js')

	HTMLCollection.prototype.forEach = Array.prototype.forEach
	NodeList.prototype.forEach = Array.prototype.forEach

	var searchButton = document.querySelector('.actions__item--search')
	var cartButton = document.querySelector('.actions__item--cart')
	var menuButton = document.querySelector('.actions__item--menu')
	var aboutButton = document.querySelector('.about__more')
	var about = document.querySelector('.about')
	var menuItems = document.querySelectorAll('.menu__item')
	var cart = document.querySelector('.cart-mini')
	var overlay = document.querySelector('.g-page__overlay')
	var pageMenu = document.querySelector('.g-page__menu')
	var pageCart = document.querySelector('.g-page__cart')
	var pageContent = document.querySelector('.g-page__content')
	var html = document.querySelector('html')

	var screenType = null;
	var htmlHandler = (e) => {
		console.log(e)
		if (window.innerWidth < 1280 && screenType != 'mobile') {
			screenType = 'mobile'
			html.classList.add('_small')
			html.classList.remove('_large')
			menuMobile.mobile()
			cartModule.mobile()
			console.log(screenType)
		} else if (window.innerWidth >= 1280 && screenType != 'desktop') {
			screenType = 'desktop'
			html.classList.add('_large')
			html.classList.remove('_small')
			menuMobile.desktop()
			cartModule.desktop()
			console.log(screenType)
		}
	}

	window.addEventListener('resize', htmlHandler)
	window.addEventListener('load', htmlHandler)

	aboutButton.addEventListener('click', () => {
		about.classList.toggle('_active')
		aboutButton.classList.toggle('_active')
	})
	searchButton.addEventListener('click', () => {
		html.classList.add('_overlay')
		searchButton.classList.add('_active')
		overlay.classList.add('_active')
	})
	cartButton.addEventListener('click', () => {
		overlay.classList.toggle('_active')
		pageCart.classList.toggle('_active')
		pageContent.classList.toggle('_right')
		cart.classList.toggle('_active')
	})
	menuButton.addEventListener('click', () => {
		overlay.classList.add('_active')
		pageMenu.classList.add('_active')
		pageContent.classList.add('_left')
	})
	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('_active')
		})
	})
	overlay.addEventListener('click', () => {
		cart.classList.remove('_active')
		overlay.classList.remove('_active')
		searchButton.classList.remove('_active')
		pageCart.classList.remove('_active')
		pageMenu.classList.remove('_active')
		pageContent.classList.remove('_right')
		pageContent.classList.remove('_left')
	})
})
