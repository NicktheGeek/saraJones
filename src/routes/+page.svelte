<script context="module" lang="ts">
    export const prerender = true;
    export const ssr = true;

    import HomeHero from "$lib/components/heros/HomeHero.svelte";
</script>

<HomeHero />
