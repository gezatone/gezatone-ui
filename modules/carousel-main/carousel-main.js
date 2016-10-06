const Flickity = require('flickity')

const carouselMainElem = document.querySelector('.carousel-main')

if (carouselMainElem) {
	new Flickity(carouselMainElem, {
		setGallerySize: false
	})
}
