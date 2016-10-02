require('./styles.css')
require('./index.html')
document.addEventListener('DOMContentLoaded', function () {
	require('carousel-main/carousel-main.js');
	require('carousel-catalog/carousel-catalog.js');

	HTMLCollection.prototype.forEach = Array.prototype.forEach;
	NodeList.prototype.forEach = Array.prototype.forEach;

	var searchButton = document.querySelector(".actions__item--search");
	var cartButton = document.querySelector(".actions__item--cart");
	var menuButton = document.querySelector(".actions__menu");
	var aboutButton = document.querySelector(".about__more");
	var about = document.querySelector(".about");
	var menuItems = document.querySelectorAll(".menu__item");
	var cart = document.querySelector(".cart-mini");
	var overlay = document.querySelector(".g-page__overlay");
	var pageMenu = document.querySelector(".g-page__menu");
	var pageCart = document.querySelector(".g-page__cart");
	var pageContent = document.querySelector(".g-page__content");

	aboutButton.addEventListener('click', function(){
		about.classList.toggle("_active");
		aboutButton.classList.toggle("_active");
	})
	searchButton.addEventListener('click', function(){
		searchButton.classList.add("_active");
		overlay.classList.add("_active");
	})
	cartButton.addEventListener('click', function(){
		console.log(screen.width);
		if(screen.width<1280){
			overlay.classList.add("_active");
			pageCart.classList.add("_active");
			pageContent.classList.add("_right");
		}
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
