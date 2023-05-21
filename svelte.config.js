// import adapter from '@sveltejs/adapter-node'
import adapter from './adapter-lambda/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		version: {
			pollInterval: 60 * 1000
		},

		adapter: adapter({
			out: 'build',
			precompress: true,
			polyfill: true
		})
	}
};

export default config;
