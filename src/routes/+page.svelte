<script lang="ts">
	import Content from "$lib/components/home/Content.svelte";
    import Hero from "$lib/components/home/Hero.svelte";
	import SeoHead from "$lib/components/SeoHead.svelte";
	import { getDefaultSEOData } from "$lib/seoData";
	
	const seoData = getDefaultSEOData();
	seoData.title = "Sara Jones for Warren County VA School Board | Home";
	seoData.description = "Sara Jones is running for the Warren County School Board. She is a parent, educator, and advocate for students, teachers, and parents.";
</script>

<SeoHead
	title={seoData.title}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
/>

<Hero />
<Content />
