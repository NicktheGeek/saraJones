const respPattern = {
	"version": "1.0",
	"provider_name": "Sara Jones for Warren County VA School Board",
	"provider_url": "https://www.sarajonesforschoolboard.com/",
	"author_name": "Sara Jones",
	"author_url": "https://www.sarajonesforschoolboard.com/",
	"title": "Sara Jones for Warren County VA School Board",
	"type": "rich",
	"thumbnail_url": "https://www.sarajonesforschoolboard.com/images/sara-jones-og-img.png",
	"thumbnail_width": 1296,
	"thumbnail_height": 863,
	"description": "Sara Jones is running for the Warren County School Board. She is a parent, educator, and advocate for students, teachers, and parents."
}

/**
 * Get SEO Data for a given path.
 * 
 * @param {String} path - The path for which to get SEO data.
 * @returns 
 */
export const getSEOData = async (path = '') => {
	if ( path.match(/statements\.+/) ) {
		try {
			const slug = path.split('/').at(-1)?.replace('.md', '')
			const post = await import(`../../../posts/${slug}.md`)

			return { ...respPattern, ...post.metadata }
		} catch (e) {
			return respPattern
		}
	}

	return respPattern
}

/**
 * Get default SEO Data.
 * 
 * @returns 
 */
export const getDefaultSEOData = () => {
	return { ...respPattern, ...{ type: 'website' } }
}

