import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		csp: {
			mode: 'hash',

			directives: {
				'script-src': ['self'],
				'style-src': ['self']
			}
		},

		output: {
			bundleStrategy: 'inline'
		},

		router: {
			type: 'hash'
		}
	}
};

export default config;
