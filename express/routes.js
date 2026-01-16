import { Router } from "express";

const router=Router();

router.get("/about", (req, res) => {
  res.send("<h1>hello this is from about page</h1>");
});
export default router