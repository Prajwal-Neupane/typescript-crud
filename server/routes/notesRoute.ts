import express from "express";
import {
  createNotes,
  deleteSingleNote,
  editSingleNote,
  getNotes,
  getSingleNote,
} from "../controllers/notesController";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", createNotes);
router.get("/note/:id", getSingleNote);
router.put("/note/:id", editSingleNote);
router.delete("/note/:id", deleteSingleNote);

export default router;
