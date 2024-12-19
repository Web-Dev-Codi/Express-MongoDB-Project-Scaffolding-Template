import { Router } from "express";
import { getAll } from "../controllers/controller.js";
// import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", getAll);

export default router;
