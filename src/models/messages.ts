import mongoose from "mongoose";

const { Schema, model } = mongoose;

const messagesSchema = new Schema({
  // TODO сделать связь между коллекциями $ref
  chatId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    enum: ["USER", "BOT"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const Messages = model('Messages', messagesSchema, 'Messages')
