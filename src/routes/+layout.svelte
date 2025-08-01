<script>
    import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    import '../assets/styles/reset.css';
    import '../assets/styles/global.css';
	import Analytics from '$lib/analytics.svelte';
</script>
<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<Analytics />

<Header />
<main>
    <slot></slot>
</main>
<Footer />
