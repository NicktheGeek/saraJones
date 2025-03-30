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
	<meta property="description" content="Sara Jones is running for the Warren County School Board. She is a parent, educator, and advocate for students, teachers, and parents." />
	<meta property="og:description" content="Sara Jones is running for the Warren County School Board. She is a parent, educator, and advocate for students, teachers, and parents." />
	<meta property="og:image" content="/images/sara-jones-og-img.png" />
</svelte:head>

<Hero />
<Content />
