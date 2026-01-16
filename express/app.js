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

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Form data received successfully!");
});
app.use((req,res)=>{
    return res.status(404).send("page not found");
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
