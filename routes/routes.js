import { Router } from "express";
import {
  getAll,
  getSingleUser,
  postSingleUser,
} from "../controllers/controller.js";
// import { validate } from "../../middleware/validate.js";

const router = Router();

router.get("/", getAll);

router.get("/:id", getSingleUser);

router.post("/", postSingleUser);

export default router;
