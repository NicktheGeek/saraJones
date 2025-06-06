<script>
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Signature from "$lib/components/Signature.svelte";
	import { getDefaultSEOData } from "$lib/seoData";
	
	const seoData = getDefaultSEOData();
	seoData.title = "Donations to Sara Jones for School Board";
	seoData.description = "Learn how to make donations to Sara Jones for School Board.";
</script>

<SeoHead
	title={seoData.title}
	description={seoData.description}
	type={seoData.type}
	thumbnail_url={seoData.thumbnail_url}
	thumbnail_width={seoData.thumbnail_width}
	thumbnail_height={seoData.thumbnail_height}
/>

<section class="wrapper">
	<div class="inner">
		<h1>Donations to <span class="basic-information website-name">Sara Jones for School Board</span></h1>
		<div class="content">
			<figure class="author-image">
				<enhanced:img src="../../assets/images/sara-jones-sq.jpg" alt="Sara Jones in a white blouse in front of the Front Royal gazebo." height=300 width=300 />
			</figure>
			<div>
				<p>
					Support the campaign and help Sara Jones make <strong>Strong Schools & Bright Futures</strong>!
				</p>
				<p class="donation-link">
					<a href="https://www.paypal.com/ncp/payment/UA3PJWRKWP2PG" aria-label="Donating through PayPal">
						Donating through
						<svg xmlns="http://www.w3.org/2000/svg" width="101px" height="32" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet"><path fill="#003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"/><path fill="#003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"/><path fill="#003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"/><path fill="#009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"/><path fill="#009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"/><path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"/></svg>
					</a> is quick and secure.
				</p>
				<p>
					Donate now and make a difference! <br />
					Thank you for your generous support
				</p>
				<p class="no-margin">If you would like to make a donation to the campaign via check, please make checks payable to <strong>Sara Jones for School Board</strong> and mail to:</p>
				<address>
					Sara Jones for School Board<br />
					962 Stuart Dr.<br />
					Front Royal, VA 22630
				</address>
			</div>
		</div>
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

	.donation-link {
		font-size: 1.1em;
		font-weight: 600;

		a {
			--background-height: 45%;
			position: relative;
			display: inline-block;
			color: var(--text);
			text-decoration-thickness: 1px;
			text-underline-offset: 0.2em;
			transition: background-size 0.2s ease-in-out;
			background-image: linear-gradient(180deg, var(--color-secondary) 0%, var(--color-secondary) 85%, var(--color-primary) 86%, var(--color-primary) 100%);
			background-repeat: no-repeat;
			background-size: 0% var(--background-height);
			background-position: 1ch 75%;
			padding-right: 0.5ch;
			margin-right: -0.5ch;
			text-shadow: 1px 1px 1px rgb(255, 255, 255);

			&:hover, &:focus {
				background-size: 95% var(--background-height);
				text-decoration: none;
			}

			&:after {
				content: "";
				display: block;
				position: absolute;
				top: 85%;
				left: 0;
				width: 1ch;
				height: 4px;
				background-color: #fff;
			}
		}
		svg {
			height: 26px;
    		width: auto;
    		position: relative;
    		top: 0.3em;
		}
	}

	.content {
		max-width: 650px;
		display: flex;
		gap: 1rem;

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
</style>
