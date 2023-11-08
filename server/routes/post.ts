import express from "express";
import {
  create_post,
  delete_post,
  get_post,
  get_posts,
  get_posts_home,
  update_post,
} from "../controllers/post_controller";

const router = express.Router();

router.post("/create", create_post);
router.delete("/delete/:id", delete_post);
router.patch("/patch/:id", update_post);
router.get("/home", get_posts_home);
router.get("/", get_posts);
router.get("/:id", get_post);

export { router as posts };
