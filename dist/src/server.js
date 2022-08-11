"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const chats_1 = __importDefault(require("./routes/chats"));
const messages_1 = __importDefault(require("./routes/messages"));
const mongoose_1 = __importDefault(require("mongoose"));
const cowsay_1 = __importDefault(require("cowsay"));
mongoose_1.default.connect('mongodb://localhost:27017/gb').then(() => {
    console.log(cowsay_1.default.say({
        text: "Mongoose connected",
        e: "oO",
        T: "U "
    }));
}).catch(error => console.log(error));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/status', (req, res) => res.send('OK'));
app.use('/chats', chats_1.default);
app.use('/messages', messages_1.default);
app.listen(5555, () => console.log(`Server has been started to http://localhost:5555`));
