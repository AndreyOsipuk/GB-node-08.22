import express from "express";
import { Messages } from "../models/messages";
const router = express.Router();

router
  .get("/", async (_, res) => {
    const messages = await Messages.find();
    res.json(messages);
  })
  .post("/", async (req, res) => {
    try {
      const newMessage = await Messages.create(req.body);
      res.json(newMessage);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  })
  .get("/:chatId", async (req, res) => {
    const message = await Messages.find({ chatId: req.params.chatId });
    res.send(message);
  })
  .delete("/:messageId", async (req, res) => {
    const deleted = await Messages.findByIdAndDelete(req.params.messageId);
    res.json(deleted);
  })
  .put("/:messageId", async (req, res) => {
    const updateMessage = await Messages.findByIdAndUpdate(
      req.params.messageId,
      req.body
    );

    res.json(updateMessage);
  });

export default router;
