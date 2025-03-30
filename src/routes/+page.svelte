<script context="module" lang="ts">
    export const prerender = true;
    export const ssr = true;

	import Content from "$lib/components/home/Content.svelte";
    import Hero from "$lib/components/home/Hero.svelte";
</script>

<svelte:head>
	<title>Sara Jones for Warren County VA School Board | Home</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`Sara Jones for Warren County VA School Board | Home`} />
</svelte:head>

<Hero />
<Content />
