import svelte from './build/svelte.js';

async function run() {
	const origin = process.env.ORIGIN || 'http://localhost:3000';

	const response = await svelte({
		env: process.env,
		url: new URL(origin + '/about'),
		method: 'GET',
		headers: new Headers({
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9',
			host: 'localhost:3000'
		}),
		body: null
	});

	console.log('Body:', await response.text());
	console.log('Headers:', response.headers);
	console.log('Status:', response.status);
}

run();
