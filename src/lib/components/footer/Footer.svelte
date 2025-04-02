<script>
	import Logo from "../header/Logo.svelte";
	import Nav from "./Nav.svelte";
	import Vote from "./Vote.svelte";

	$effect(() => {
		const year = new Date().getFullYear();
		const copyrightYear = document.getElementById("copyright-year");

		if (copyrightYear) {
			copyrightYear.textContent = year.toString();
		}
	});
</script>
<footer class="wrapper">
	<div class="inner">
		<div class="logo-wrap">
			<Logo />
		</div>
		<Nav />
		<Vote />
	</div>
	<div class="copyright inner">
		<p class="copyright-text">©<span id="copyright-year">2025</span> Sara Jones for School Board</p>
		<p>Website by <a href="https://designsbynickthegeek.com">Nick Croft</a></p>
		<p class="authorized">Authorized by Sara Jones for School Board</p>
		<nav aria-label="Additional Information">
			<ul class="nav">
				<li>
					<a href="/accessibility">Accessibility</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
<style>
	.wrapper {
		--inner-flex-direction: row;
		--inner-flex-wrap: wrap;
		--inner-flex-justify: space-between;
		background: var(--bg);
		padding: 1rem var(--content-padding);
		flex-direction: column;
	}

	@media (max-width: 520px) {
		.logo-wrap {
			flex: 1 1 100%;
			min-width: 100%;
			display: flex;
			justify-content: center;
		}
	}

	.copyright {
		display: flex;
		justify-content: left;
		align-items: center;
		flex-wrap: wrap;
		column-gap: 1rem;
		row-gap: 0.5rem;

		p {
			margin: 0;
			font-size: 1rem;
			color: var(--text);
		}

		a {
				color: var(--text);
				text-decoration: underline;

				&:hover,
				&:focus {
					text-decoration: none;
				}

				&:visited {
					color: var(--text);
				}
			}

		nav {
			margin-left: auto;
		}

		.nav {
			display: flex;
			justify-content: center;
			align-items: center;
			row-gap: 1rem;
			column-gap: 0.5rem;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 1rem;
		}
	}

	@media (max-width: 550px) {
		.copyright-text {
			order: 3;
		}

		.authorized {
			order: 4;
		}
	}
</style>
