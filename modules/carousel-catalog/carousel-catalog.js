var Flickity = require('flickity')

var carouselCatalogElem = document.querySelector('.carousel-catalog')
new Flickity( carouselCatalogElem, {
	cellAlign: 'left',
	wrapAround: true,
	pageDots: false
})
