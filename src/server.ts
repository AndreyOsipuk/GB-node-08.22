import express from "express";

import "dotenv/config";

import ChatRouter from "./routes/chats";
import MessageRouter from "./routes/messages";
import AuthRouter from "./routes/auth";

import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/error";
import { verifyToken } from './middlewares/tokenVerify';

const URI = process.env.MONGODB_URI as string;

mongoose
  .connect(URI)
  .then(() => console.log("Mongoose connected"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/status", (_, res) => res.send("OK"));

app.use("/chats", ChatRouter);
app.use("/messages", MessageRouter);
app.use("/", AuthRouter);

app.get("/profile", verifyToken, (req, res) => {
  res.send('Im secured')
});

app.use(errorMiddleware);

app.all("*", (_, res) => {
  res.status(404).json({ error: 404 });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server has been started to http://localhost:${process.env.PORT}`)
);
