const Flickity = require('flickity')

const carouselCatalogElem = document.querySelector('.carousel-catalog')
if (carouselCatalogElem) {

	new Flickity( carouselCatalogElem, {
		cellAlign: 'left',
		wrapAround: true,
		pageDots: false
	})
}
