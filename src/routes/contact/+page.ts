/// file: src/routes/blog/[slug]/+page.js
import { getSEOData } from '$lib/seoData.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({route, url}) {
	try {
		const path = route.id
		const data = await getSEOData(path)

		data.url = url.toString();

		return {
			seoData: data,
		}
	} catch (e) {
		error(404, `Could not find ${route.id}`)
	}
}
