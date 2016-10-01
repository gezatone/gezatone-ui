require('./styles.css')
require('./index.html')
document.addEventListener('DOMContentLoaded', function () {
	require('carousel-main/carousel-main.js');
	require('carousel-catalog/carousel-catalog.js');

	HTMLCollection.prototype.forEach = Array.prototype.forEach;
	NodeList.prototype.forEach = Array.prototype.forEach;

	var searchButton = document.querySelectorAll(".actions__item--search").item(0);
	var cartButton = document.querySelectorAll(".actions__item--cart").item(0);
	var menuButton = document.querySelectorAll(".actions__menu").item(0);
	var menuItems = document.querySelectorAll(".menu__item");
	var cart = document.querySelectorAll(".cart-mini").item(0);
	var overlay = document.querySelectorAll(".g-page__overlay").item(0);
	var pageMenu = document.querySelectorAll(".g-page__menu").item(0);
	var pageCart = document.querySelectorAll(".g-page__cart").item(0);
	var pageContent = document.querySelectorAll(".g-page__content").item(0);

	searchButton.addEventListener('click', function(){
		searchButton.classList.add("_active");
		overlay.classList.add("_active");
	})
	cartButton.addEventListener('click', function(){
		overlay.classList.add("_active");
		pageCart.classList.add("_active");
		pageContent.classList.add("_right");
		cart.classList.toggle("_active");
	})
	menuButton.addEventListener('click', function(){
		overlay.classList.add("_active");
		pageMenu.classList.add("_active");
		pageContent.classList.add("_left");
	})
	menuItems.forEach((item, index) => {
		item.addEventListener('click', () => {
			item.classList.toggle("_active");
		})
	});
	overlay.addEventListener('click', function(){
		overlay.classList.remove("_active");
		searchButton.classList.remove("_active");
		pageCart.classList.remove("_active");
		pageMenu.classList.remove("_active");
		pageContent.classList.remove("_right");
		pageContent.classList.remove("_left");
	})
});
