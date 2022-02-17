import 'reflect-metadata';
//import 'es6-shim';
import {User} from "./User.js";
import {CRUD} from "./crudInterface.js";  
import data from "./data.json" 
import {plainToClass} from 'class-transformer'

let users: any = [];

data.forEach(element => {
    let user = plainToClass(User, element);
    users.push(user);
});

console.log(users);