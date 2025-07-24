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
		li {
			counter-increment: item;
			margin-bottom: 1em;
			position: relative;

			&:before {
				content: counter(item);
				position: absolute;
				left: -2em;
				font-weight: bold;
				background-color: var(--bg);
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

			strong {
				font-size: 1.5rem;
				line-height: 1.2;
				font-weight: 700;
				display: block;
			}
			span {
				font-weight: 500;
				display: block;
			}
		}
	}
</style>