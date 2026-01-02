import express from "express";
const server = express();


server.get("/", (req, res) => {
  res.write("hello this is express server");
  res.end();
});
server.get("/about", (req, res) => {
  res.send("<h1>hello this is from about page</h1>");
});
server.get("/contact", (req, res) => {
  return res.send(`
        <div class="container">
<h2>URL Shortener</h2>

<form id="form">
<input type="text" name="url" placeholder="Enter URL" required>
<input type="text" name="url_short" placeholder="Custom code (optional)">
<button>Shorten</button>
</form>

<div id="output"></div>
</div>`);
});
const port=process.env.PORT ||3000;
server.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
