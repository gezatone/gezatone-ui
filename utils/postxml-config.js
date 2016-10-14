module.exports = [
	require('postxml-import')({
		path (attr) {
			if (!/(\\|\/|\.|--)/.test(attr))
				return `modules/${attr}/${attr}.htm`
			if (/--/.test(attr))
				return `modules/${attr.replace(/--.+$/, '')}/${attr}.htm`
			return attr
		}
	}),
	require('postxml-beml')(),
	require('postxml-imgalt')(),
	require('postxml-placeholder')({
		url: 'http://placehold.alanev.ru/'
	}),
	require('postxml-image-size')({
		cwd: 'build'
	}),
	require('postxml-wrap')(),
	require('postxml-repeat')(),
	require('postxml-icon')()
]
