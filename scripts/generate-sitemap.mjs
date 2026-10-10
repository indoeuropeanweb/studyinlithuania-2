import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.studyinlithuania.in";
const OUTPUT_DIR = path.resolve("out");
const SITEMAP_PATH = path.join(OUTPUT_DIR, "sitemap.xml");

function getHtmlFiles(directory) {
  if (!fs.existsSync(directory)) {
    throw new Error(
      `Export directory not found: ${directory}. Run next build first.`
    );
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(
    (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return getHtmlFiles(fullPath);
      }

      return entry.isFile() && entry.name.endsWith(".html")
        ? [fullPath]
        : [];
    }
  );
}

function getRoute(filePath) {
  const relativePath = path.relative(OUTPUT_DIR, filePath)
    .split(path.sep)
    .join("/");

  let route = relativePath.replace(/\.html$/, "");

  if (route === "index") {
    return "/";
  }

  if (route.endsWith("/index")) {
    route = route.slice(0, -"/index".length);
  }

  return `/${route.replace(/^\/+|\/+$/g, "")}/`;
}

const routes = [
  ...new Set(
    getHtmlFiles(OUTPUT_DIR)
      .map(getRoute)
  ),
].sort();

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");

console.log(`Sitemap generated: ${SITEMAP_PATH}`);
console.log(`Total URLs: ${routes.length}`);