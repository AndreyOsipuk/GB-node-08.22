"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = require("../models/messages");
const router = express_1.default.Router();
router
    .get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield messages_1.Messages.find();
    res.json(messages);
}))
    .post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMessage = yield messages_1.Messages.create(req.body);
        res.json(newMessage);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}))
    .get("/:chatId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield messages_1.Messages.find({ chatId: req.params.chatId });
    res.send(message);
}))
    .delete("/:messageId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield messages_1.Messages.findByIdAndDelete(req.params.messageId);
    res.json(deleted);
}))
    .put("/:messageId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateMessage = yield messages_1.Messages.findByIdAndUpdate(req.params.messageId, req.body);
    res.json(updateMessage);
}));
exports.default = router;
