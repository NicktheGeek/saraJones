<script context="module" lang="ts">
    export const prerender = true;
    export const ssr = true;

	import Content from "$lib/components/home/Content.svelte";
    import Hero from "$lib/components/home/Hero.svelte";
</script>

<Hero />
<Content />
