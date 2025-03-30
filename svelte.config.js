import adapter from '@sveltejs/adapter-netlify';

import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

const config = { 
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [mdsvex(mdsvexOptions)],
    kit: { adapter: adapter() }
};

export default config;
