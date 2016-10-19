const Swiper = require('swiper')

const mainSwiper = new Swiper('.carousel-main.swiper-container', {
	// Optional parameters
	loop: true,
	autoHeight: true,

	// If we need pagination
	pagination: '.carousel-main .swiper-pagination',

	// Navigation arrows
	nextButton: '.carousel-main .swiper-button-next',
	prevButton: '.carousel-main .swiper-button-prev',
})
setTimeout(function () {
	mainSwiper.update(true)
}, 500)
