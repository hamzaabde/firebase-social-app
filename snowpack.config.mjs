/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: '/', static: true },
		src: '/dist',
	},
	plugins: ['@snowpack/plugin-react-refresh'],
	routes: [
		/* Enable an SPA Fallback in development: */
		{ match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		/* Example: Bundle your final build: */
		bundle: true,
	},
	alias: {
		'@components': './src/components',
		'@views': './src/views',
		'@firebase': './src/firebase',
		'@hooks': './src/hooks',
		'@utils': './src/utils',
		'@helpers': './src/utils/helpers',
	},
}
