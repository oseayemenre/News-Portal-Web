import express from "express";
import {
  forgotPassword,
  login,
  register,
  users,
} from "../controllers/auth_controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", users);
router.patch("/forgot-password", forgotPassword);

export { router as auth };
