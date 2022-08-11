"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const messagesSchema = new Schema({
    // TODO сделать связь между коллекциями
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
exports.Messages = model('Messages', messagesSchema, 'Messages');
