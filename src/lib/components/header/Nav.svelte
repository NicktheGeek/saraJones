<script>

	import Home from "../svgs/Home.svelte";

</script>
<nav aria-label="Main">
    <ul class="nav">
        <li>
            <a href="/" aria-label="Sara Jones for School Board">
                <Home />
            </a>
        </li>
        <li>
            <a href="/statements">Statements</a>
        </li>
    </ul>
</nav>
<style>
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;

        a {
            text-decoration: none;
            text-transform: uppercase;
            color: var(--text);
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.2;

            &:hover,
            &:focus {
                text-decoration: underline;
                --icon-transform: scale(1.2);
            }
        }
    }
</style>