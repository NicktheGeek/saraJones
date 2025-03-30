<script>
	import Logo from "./Logo.svelte";
	import Nav from "./Nav.svelte";

</script>
<header class="wrapper">
	<div class="inner">
		<Logo />
		<Nav />
	</div>
</header>
<style>
	.wrapper {
		--inner-flex-direction: row;
		--inner-flex-wrap: wrap;
		--inner-flex-justify: space-between;
		background: var(--bg);
		padding: 1rem var(--content-padding);
	}
</style>
