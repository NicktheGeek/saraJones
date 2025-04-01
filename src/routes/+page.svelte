<script lang="ts">
	let { data } = $props()
	let { seoData } = data;

	import Content from "$lib/components/home/Content.svelte";
    import Hero from "$lib/components/home/Hero.svelte";
	import SeoHead from "$lib/components/SeoHead.svelte";
</script>

<SeoHead
	title={seoData.title}
	language={seoData.language}
	robots={seoData.robots}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
	provider_name={seoData.provider_name}
	author_name={seoData.author_name}
	author_url={seoData.author_url}
	url={seoData.url}
/>

<Hero />
<Content />
