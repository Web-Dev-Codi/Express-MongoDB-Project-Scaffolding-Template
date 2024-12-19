import { Router } from "express";
import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API v1" });
});

export default router;
