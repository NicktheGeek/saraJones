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
			<a href='mai&#108;to&#58;S%6&#49;raj&#37;6&#70;nes%34&#115;c&#104;o&#111;%6Cb%6F%61&#114;d&#64;&#103;ma&#37;&#54;9&#37;6C&#46;%63&#111;m' aria-label="Email">
				<Email />
			</a>
		</li>
	</ul>
</nav>

<style>
	h2 {
		margin-bottom: 0.5em;
		font-size: 1.5rem;
	}
	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-content: center;
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