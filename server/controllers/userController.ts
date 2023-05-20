import { RequestHandler } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";

export const registerUser: RequestHandler = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const rawPassword = req.body.password;
  const existingUsername = await userModel.findOne({ username: username });
  if (existingUsername) {
    res.json("Username is already taken.. Try another one");
    return;
  }
  const existingEmail = await userModel.findOne({ email: email });
  if (existingEmail) {
    res.json("Email is already taken");
    return;
  }
  //   res.json({ username, email, rawPassword });

  if (!username || !email || !rawPassword) {
    res.json("User Data is Missing");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(rawPassword, salt);

  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  req.session.userId = newUser._id;
  //   const response = await newUser.save();
  //   res.json(response);
};
