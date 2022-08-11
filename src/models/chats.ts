import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chatsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Chats = model('Chats', chatsSchema, 'Chats')
