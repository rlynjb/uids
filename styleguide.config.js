
module.exports = {
	// set your styleguidist configuration here
	title: 'UIDS',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	sections: [
		{
			name: 'Introduction',
			content: 'src/components/Introduction.md'
		},
		{
			name: 'Components',
			components: 'src/components/data-displays/[A-Z]*.vue'
		}
	],
	ignore: [
		'**/components/data-displays/*.spec.vue'
	]
}
