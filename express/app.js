import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 3000;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Added a POST route to handle form submission
app.post("/contact", (req, res) => {
    console.log(req.body); // Logs the submitted form data to the backend
    res.send("Form data received successfully!");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
