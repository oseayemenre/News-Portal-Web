import express from "express";
import {
  create_category,
  delete_category,
  get_categories,
  get_category,
  update_category,
} from "../controllers/categories_controller";

const router = express.Router();

router.post("/create", create_category);
router.delete("/delete/:id", delete_category);
router.patch("/patch/:id", update_category);
router.get("/", get_categories);
router.get("/:id", get_category);

export { router as categories };
