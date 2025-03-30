<script>
    import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    import '../assets/styles/reset.css';
    import '../assets/styles/global.css';
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
