<script lang="ts">
  import { page } from '$app/state'

  const MEASUREMENT_ID = 'G-SCLZPMG6MK'

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', MEASUREMENT_ID, {
        page_title: document.title,
        page_path: page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script>
    const interactiveActions = ['click', 'submit', 'change', 'input', 'scroll'];
    let firstInteraction = false;
    const MEASUREMENT_ID = 'G-SCLZPMG6MK'

    interactiveActions.forEach((action) => {
      document.addEventListener(action, () => {
        if (!firstInteraction) {
          const script = document.createElement('script');
          script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
          document.head.appendChild(script);
          firstInteraction = true;
        }
      });
    });
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', MEASUREMENT_ID)
  </script>
</svelte:head>
