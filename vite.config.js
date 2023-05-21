import { sveltekit, vitePreprocess } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preprocess: vitePreprocess()
});
