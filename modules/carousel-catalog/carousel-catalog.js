var mySwiper = new Swiper ('.carousel-catalog.swiper-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 'auto',

	// If we need pagination
	pagination: '.carousel-catalog .swiper-pagination',

	// Navigation arrows
	nextButton: '.carousel-catalog .swiper-button-next',
	prevButton: '.carousel-catalog .swiper-button-prev',
})
setTimeout(function () {
	mySwiper.update(true)
}, 200)
