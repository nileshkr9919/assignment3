import {User} from "./User.js";

export interface CRUD
{
    create(user: User) : void;
    read(user: User) : void;
    update(user: User) : void;
    delete(user: User) : void;

}