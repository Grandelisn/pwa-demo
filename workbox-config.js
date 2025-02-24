module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{tsx,ico,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};