export default function Head() {
  return (
    <>
      <title>Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        defer
        data-domain="portfolio-prei.vercel.app"
        src="https://plausible.io/js/script.file-downloads.outbound-links.pageview-props.tagged-events.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
        }}
      />
    </>
  );
}
