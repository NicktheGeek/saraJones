<script>
	import Email from "../svgs/Email.svelte";
	import Facebook from "../svgs/Facebook.svelte";

</script>
<nav aria-label="Footer">
	<h2>For More Information</h2>
	<ul class="nav">
		<li>
			<a href="https://www.facebook.com/profile.php?id=61574473516188&rdid=rplWJSdeSnzLpBFA" aria-label="Facebook">
				<Facebook />
			</a>
		</li>
		<li>
			<a href='/contact' aria-label="Contact Sara Jones">
				<Email />
			</a>
		</li>
	</ul>
</nav>

<style>
	h2 {
		margin-bottom: 0.5em;
		font-size: 1.5rem;

		@media (max-width: 512px) {
			display: none;
		}
	}
	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-content: center;

		@media (max-width: 520px) {
			flex-direction: column;
			justify-content: space-between;
		}
	}

	li {
		--email-icon-size: 2rem;
		--facebook-icon-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: var(--text);
		text-decoration: none;

		&:hover,
		&:focus {
			--icon-transform: scale(1.1);
		}
	}
</style>