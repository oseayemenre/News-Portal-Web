import express from "express";
import {
  create_page,
  delete_page,
  get_page,
  get_pages,
  update_page,
} from "../controllers/page_controller";

const router = express.Router();

router.post("/create", create_page);
router.delete("/delete/:id", delete_page);
router.patch("/patch/:id", update_page);
router.get("/", get_pages);
router.get("/:id", get_page);

export { router as page };
