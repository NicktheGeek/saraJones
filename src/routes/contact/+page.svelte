<script>
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Signature from "$lib/components/Signature.svelte";
	let { data } = $props();
	let { seoData } = data;
</script>

<SeoHead
	title={seoData.title}
	language={seoData.language}
	robots={seoData.robots}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
	provider_name={seoData.provider_name}
	author_name={seoData.author_name}
	author_url={seoData.author_url}
	url={seoData.url}
/>
<section class="wrapper">
	<div class="inner">
		<h1>Contact <span class="basic-information website-name">Sara Jones for School Board</span></h1>
		<div class="content">
			<figure class="author-image">
				<enhanced:img src="../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." height=300 width=300 />
			</figure>
			<div>
				<p class="no-margin">If you would like to contact <strong>Sara Jones for School Board</strong>, please use the form below or send a letter to:</p>
				<address>
					Sara Jones for School Board<br />
					962 Stuart Dr.<br />
					Front Royal, VA 22630
				</address>
			</div>
		</div>
		<form 
			action="/thank-you" 
			method="POST" 
			class="contact-form"
			name="contactSaraJones"
			data-netlify="true" 
			data-netlify-recaptcha="true"
		>
			<input type="hidden" name="form-name" value="contactSaraJones" />
			<div class="form-row">
				<div class="form-input-group">
					<label for="name">Name:</label>
					<input type="text" id="name" name="name" required />
				</div>

				<div class="form-input-group">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required />
				</div>
			</div>

			<div class="form-input-group">
				<label for="subject">Subject:</label>
				<input type="text" id="subject" name="subject" required />
			</div>
			<div class="form-input-group">
				<label for="message">Message:</label>
				<textarea id="message" name="message" rows="8" required></textarea>
			</div>

			<div data-netlify-recaptcha="true"></div>
			<button type="submit">Send</button>
		</form>

		<Signature />
	</div>
</section>
<style>
	.wrapper {
		--content-width: 800px;
	}

	h1 {
		background-color: var(--bg);
		padding: 1rem;
		text-align: center;
		width: 100%;
		margin-bottom: 0;
	}

	.content {
		max-width: 650px;
		display: flex;
		gap: 1rem;
		align-items: center;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.author-image {
		max-width: 165px;
		width: 100%;
		margin: 0;
		margin-top: 5px;

		@media (max-width: 600px) {
			max-width: 100%;
			display: flex;
			justify-content: center;
		}
	}

	.no-margin {
		margin: 0;
	}

	address {
		margin-top: 0.5rem;
		font-style: normal;
		line-height: 1.2;
	}

	form {
		max-width: 650px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.form-row {
		display: flex;
		gap: 1rem;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.form-input-group {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	label {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 1rem;
	}

	input, textarea {
		border: 1px solid var(--text);
		padding: 1rem;
		border-radius: 4px;
		font-size: 1rem;
	}

	button {
		background-color: var(--bg);
		color: var(--text);
		padding: 1rem;
		border-radius: 4px;
		border: 1px solid var(--text);
		font-size: 1rem;
		font-weight: 700;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover,
		&:focus {
			background-color: var(--text);
			color: #fff;
		}
	}
</style>
