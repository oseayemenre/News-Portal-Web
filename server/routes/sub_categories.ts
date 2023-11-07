import express from "express";
import {
  create_sub_category,
  delete_sub_category,
  get_sub_categories,
  get_sub_category,
  update_sub_category,
} from "../controllers/sub_categories_controller";

const router = express.Router();

router.post("/create", create_sub_category);
router.delete("/delete/:id", delete_sub_category);
router.patch("/patch/:id", update_sub_category);
router.get("/", get_sub_categories);
router.get("/:id", get_sub_category);

export { router as sub_categories };
