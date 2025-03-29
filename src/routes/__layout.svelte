<script>
    import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
</script>
<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<Header />
<main>
    <slot></slot>
</main>
<Footer />
