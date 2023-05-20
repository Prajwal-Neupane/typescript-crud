import express from "express";
import {
  getAuthenticatedUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getAuthenticatedUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
