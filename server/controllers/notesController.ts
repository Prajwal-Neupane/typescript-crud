import { RequestHandler } from "express";
import NoteModel from "../models/noteModel";

export const getNotes: RequestHandler = async (req, res) => {
  const response = await NoteModel.find();
  res.json(response);
};

export const createNotes: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    const newData = await NoteModel.create({
      title: title,
      text: text,
    });
    res.json(newData);
  } catch (error) {
    next(error);
  }
};

export const defaultText: RequestHandler = async (req, res) => {
  res.send("<h1> Oops! Please check it again </h1>");
};

export const getSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const data = await NoteModel.findById(id);
  res.json(data);
};

export const deleteSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const data = await NoteModel.findByIdAndDelete(id);
  res.json(data);
};

export const editSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  // const { userId } = req.body;
  // const note = await NoteModel.findById(id);

  // if (note?.id === userId) {
  //   const response = await NoteModel.updateOne({ $set: req.body });
  //   res.json(response);
  // }
  const data = await NoteModel.findByIdAndUpdate(
    { _id: id },
    { $set: req.body }
  );
  // const data = await NoteModel.updateOne({ $set: req.body });
  res.json(data);
};
