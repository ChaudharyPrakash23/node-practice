import http from "http";
import { readFile, writeFile } from "fs/promises";
import crypto from "crypto";
import path from "path";

const port = 3002;
const DATA_FILE = path.join(process.cwd(), "links.json");

async function loadLinks() {
  try {
    const data = await readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveLinks(data) {
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {

  // Serve page
  if (req.method === "GET" && req.url === "/") {
    readFile("urlshortner.html")
      .then(page => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(page);
      })
      .catch(() => {
        res.writeHead(500);
        res.end("Server error");
      });
    return;
  }

  // Create short link
  if (req.method === "POST" && req.url === "/shorten") {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", async () => {
      try {
        let { url, url_short } = JSON.parse(body);

        url = url.trim();
        if (url.startsWith("URL: ")) {
          url = url.replace(/^URL: /, "");
        }
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          url = "https://" + url;
        }

        if (!url) {
          res.writeHead(400);
          return res.end("URL required");
        }

        const links = await loadLinks();
        const code = url_short || crypto.randomBytes(4).toString("hex");

        links[code] = url;
        await saveLinks(links);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ short: `http://localhost:${port}/${code}` }));
      } catch (err) {
        console.error(err);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end("Server error");
        }
      }
    });

    return;
  }

  // Redirect short link
  if (req.method === "GET" && req.url.length > 1) {
    loadLinks().then(links => {
      const code = req.url.slice(1);

      if (links[code]) {
        res.writeHead(302, { Location: links[code] });
        return res.end();
      }

      res.writeHead(404);
      res.end("Not found");
    });

    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
