//import 'reflect-metadata';
//import 'es6-shim';
import { User } from "./User.js";
import data from "./data.json" assert { type: "json" };
import { plainToClass } from "class-transformer";
let users;
users = [];
for (const user of data) {
    const newUser = plainToClass(User, user);
    users.push(newUser);
}
