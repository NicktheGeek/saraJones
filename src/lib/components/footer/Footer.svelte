<script>

	import Logo from "../header/Logo.svelte";
	import Nav from "./Nav.svelte";
	import Vote from "./Vote.svelte";

</script>
<footer class="wrapper">
    <div class="inner">
        <Logo />
        <Nav />
        <Vote />
    </div>
</footer>
<style>
    .wrapper {
        --inner-flex-direction: row;
        --inner-flex-wrap: wrap;
        --inner-flex-justify: space-between;
        background: var(--bg);
        padding: 1rem var(--content-padding);
    }
</style>
