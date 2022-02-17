import {Role} from "./Role.js";
export class User{

   constructor(private firstName:string, private middleName :string, private lastName:string,
    private email:string, private phone_no: string, private address: string, private role: Role)
   {

   }
}
