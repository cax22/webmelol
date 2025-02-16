export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const baseUrl = "https://webmelol.com";

  const routes = [
    // Main Pages
    { url: "/", lastModified: new Date().toISOString() },
    { url: "/about", lastModified: new Date().toISOString() },
    { url: "/portfolio", lastModified: new Date().toISOString() },
    { url: "/quote", lastModified: new Date().toISOString() },
    { url: "/faq", lastModified: new Date().toISOString() },

    // Services Pages
    {
      url: "/getstarted?type=business",
      lastModified: new Date().toISOString(),
    },
    {
      url: "/getstarted?type=portfolio",
      lastModified: new Date().toISOString(),
    },
    { url: "/getstarted?type=landing", lastModified: new Date().toISOString() },
    { url: "/getstarted?type=blog", lastModified: new Date().toISOString() },

    // Legal Pages
    { url: "/privacy", lastModified: new Date().toISOString() },
    { url: "/terms", lastModified: new Date().toISOString() },
    { url: "/site-map", lastModified: new Date().toISOString() },
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route.url}</loc>
          <lastmod>${route.lastModified}</lastmod>
        </url>
      `
        )
        .join("")}
    </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
