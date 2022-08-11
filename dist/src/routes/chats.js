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
const chats_1 = require("../models/chats");
const router = express_1.default.Router();
router
    .get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chats = yield chats_1.Chats.find();
    res.json(chats);
}))
    .post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newChat = yield chats_1.Chats.create(req.body);
        res.status(201);
        res.json(newChat);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}))
    .delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield chats_1.Chats.findByIdAndDelete(req.params.id);
    res.json(deleted);
}))
    .put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateChat = yield chats_1.Chats.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateChat);
}));
exports.default = router;
