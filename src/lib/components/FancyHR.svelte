<div class="wrapper">
	<div class="inner">
		<hr />
	</div>
</div>

<style>
	.wrapper {
		--inner-gap: 0.25rem;
		padding: 1rem var(--content-padding);
	}

	hr {
		width: 100%;
		border: none;
		height: 1px;
		background-color: var(--color-hr);
		margin: 0;
	}
	hr:before {
		content: '';
		display: block;
		width: 80%;
		height: 1px;
		background-color: var(--color-hr);
	}
	hr:after {
		content: '';
		display: block;
		width: 80%;
		height: 1px;
		background-color: var(--color-hr);
	}
</style>