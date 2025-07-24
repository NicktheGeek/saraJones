<div class="wrapper">
	<div class="inner">
		<h2 class="title">Vision and goals</h2>
		<div class="content">
			<ol>
				<li>
					<strong>Prioritize Student Achievement</strong>
					<span>Implement policies and allocate resources strategically to drive measurable improvements in student outcomes and academic success.</span>
				</li>
				<li>
					<strong>Strengthen Family Engagement</strong>
					<span>Promote transparent, consistent communication between schools and families to build trust and support student learning at home and in the classroom.</span>
				</li>
				<li>
					<strong>Ensure Equitable Resource Allocation</strong>
					<span>Advocate for the responsible and equitable use of district funds to maximize support for all students, with a focus on closing achievement gaps and enhancing educational opportunities.</span>
				</li>
				<li>
					<strong>Recruit and Retain High-Quality Educators</strong>
					<span>Foster a supportive, collaborative work environment that empowers educators to thrive, while advocating for competitive salaries to attract and retain top teaching talent within our schools.</span>
				</li>
			</ol>
		</div>
	</div>
</div>

<style>
	.wrapper {
		--content-width: 800px;
	}

	h2.title {
		text-align: center;
		font-size: 2.5rem;
		text-transform: uppercase;
		margin-bottom: 0;
		width: 100%;
	}

	
	ol {
		list-style: none;
		counter-reset: item;
		margin-left: 0;
		padding-left: 0;

		li {
			counter-increment: item;
			margin-bottom: 2em;
			margin-top: 3em;
			position: relative;

			&:before,
			&:after {
				font-size: 2rem;
				content: '';
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}

			&:after {
				content: counter(item);
				top: -1.5em;
				font-weight: bold;
				background-color: white;
				color: var(--text);
				padding: 0.5em;
				aspect-ratio: 1;
				width: 1.5em;
				height: 1.5em;
				line-height: 1;
				border-radius: 50%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
			}

			&:before {
				top: -0.75em;
				height: 1px;
				width: 20%;
				background-color: var(--text);
			}

			strong {
				font-size: 1.5rem;
				line-height: 1.2;
				font-weight: 700;
				display: block;
				text-align: center;
			}
			span {
				font-weight: 500;
				display: block;
				text-align: center;
				text-wrap: balance;
			}
		}
	}
</style>