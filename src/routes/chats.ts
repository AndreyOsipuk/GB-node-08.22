import express, { Request } from "express";
import { Chats } from "../models/chats";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

const router = express.Router();

router
  .get("/", async (_, res) => {
    const chats = await Chats.find();
    res.json(chats);
  })
  .post("/", async (req: TypedRequestBody<{ name: string }>, res, next) => {
    await Chats.create(req.body, (err: Error, newChat: typeof Chats) => {
      if (err) {
        next(err);
      }

      res.status(201);
      res.json(newChat);
    });
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
