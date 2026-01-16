import express from "express";
const server = express();
import router from "./routes.js";
import path from "path";

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.set("views", path.join(process.cwd()));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.write("hello this is express server");
  res.end();
});
server.get("/report", (req, res) => {
  const student={
    name:"praksh",
    age:"23",
    college:"ncit"
  }
  res.render("report",{student});
});
server.use(router);
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
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
