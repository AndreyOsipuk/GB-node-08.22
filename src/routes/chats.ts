import express from "express";
import { Chats } from "../models/chats";
const router = express.Router();

router
  .get("/", async (_, res) => {
    const chats = await Chats.find();
    res.json(chats);
  })
  .post("/", async (req, res) => {
    try {
      const newChat = await Chats.create(req.body);
      res.status(201);
      res.json(newChat);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  })
  .delete("/:id", async (req, res) => {
    const deleted = await Chats.findByIdAndDelete(req.params.id);
    res.json(deleted);
  })
  .put("/:id", async (req, res) => {
    const updateChat = await Chats.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateChat);
  });

export default router;
