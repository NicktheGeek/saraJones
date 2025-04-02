<script>
	import Apple from "../svgs/Apple.svelte";
</script>
<div class="logo">
    <a href="/" aria-label="Sara Jones for School Board">
        <span class="logo-name" aria-hidden="true">Sara J<span style="max-width: 1ch;"><Apple /></span>nes</span>
        <span class="logo-subtext" aria-hidden="true">for School Board</span>
    </a>
</div>
<style>
    .logo {
        a {
            display: flex;
            flex-direction: column;
            align-items: left;
            text-decoration: none;
            color: var(--text);
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.2;

            --apple-size: 1ch;

            .logo-subtext {
                font-size: 0.47em;
                font-weight: 400;
                text-transform: uppercase;
            }
        }
    }
</style>