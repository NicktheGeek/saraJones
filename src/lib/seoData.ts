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

const pages = {
	'/': {
		title: 'Sara Jones for Warren County VA School Board | Home',
		description: 'Sara Jones is running for the Warren County School Board. She is a parent, educator, and advocate for students, teachers, and parents.',
	},
	'/accessibility': {
		title: 'Accessibility Statement for Sara Jones for School Board',
		description: 'Sara Jones for School Board is fully conformant with WCAG 2.2 level AA. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.',
	},
	'/donations': {
		title: 'Info on how to  for Sara Jones for School Board',
		description: 'Learn how to make donations to Sara Jones for School Board.',
	},
	'/statements': {
		title: 'Statements',
		description: 'This is a blog about statements.',
	},
}

/**
 * Get SEO Data for a given path.
 * 
 * @param any path - The path for which to get SEO data.
 * @returns 
 */
export const getSEOData = async (path) => {
	if ( path.match(/statements\.+/) ) {
		try {
			const slug = path.split('/').at(-1)?.replace('.md', '')
			const post = await import(`../../../posts/${slug}.md`)

			return { ...respPattern, ...post.metadata }
		} catch (e) {
			return respPattern
		}
	}

	try {
    	const page = pages[path]
    	return { ...respPattern, ...page }
	} catch (e) {
		return respPattern
	}
}
