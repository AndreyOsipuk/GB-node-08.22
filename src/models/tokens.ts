import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    expiresIn: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Token = model("Token", TokenSchema, "Token");
