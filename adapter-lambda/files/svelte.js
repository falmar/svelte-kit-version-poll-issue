import './shims.js';

import { Server } from './server/index.js';
import { manifest } from './server/manifest.js';

const baseOpts = {
	env: {},
	url: '',
	method: '',
	headers: new Headers(),
	body: '',
	enconding: ''
};

export default async function svelte({ env, url, method, headers } = baseOpts) {
	const req = new Request(url.toString(), {
		method: method,
		headers: headers,
		body: null
	});

	const server = new Server(manifest);
	await server.init({ env });

	return await server.respond(req, {
		platform: { req },
		getClientAddress: () => '127.0.0.1'
	});
}
