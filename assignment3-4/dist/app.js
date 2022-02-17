"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
//import 'es6-shim';
const User_js_1 = require("./User.js");
const data_json_1 = __importDefault(require("./data.json"));
const class_transformer_1 = require("class-transformer");
let users = [];
data_json_1.default.forEach(element => {
    let user = (0, class_transformer_1.plainToClass)(User_js_1.User, element);
    users.push(user);
});
console.log(users);
//# sourceMappingURL=app.js.map