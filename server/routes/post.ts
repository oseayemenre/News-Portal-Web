import express from "express";
import {
  create_post,
  delete_post,
  get_post,
  get_posts,
  update_post,
} from "../controllers/post_controller";

const router = express.Router();

router.post("/create", create_post);
router.delete("/delete/:id", delete_post);
router.patch("/patch/:id", update_post);
router.get("/", get_posts);
router.get("/:id", get_post);

export { router as posts };
