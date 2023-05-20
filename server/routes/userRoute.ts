import express from "express";
import { registerUser } from "../controllers/userController";

const router = express.Router();

router.post("/user/register", registerUser);

export default router;
