var mySwiper = new Swiper ('.carousel-main.swiper-container', {
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
	mySwiper.update(true)
}, 500)
