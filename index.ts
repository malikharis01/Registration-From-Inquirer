#! /usr/bin/env node

import { questions } from "./questions.js";
import inquirer from "inquirer";
let answers = await inquirer.prompt(questions);
type student = {
    first_name : string;
    last_name : string;
    age : number,
    gender : string,
    address : address,
    phone_number : number,
    email : string,
};
type address = {
    city : string,
    street : number,
    postal_code : number,

};
let registration : student = {
    first_name : answers.first_name,
    last_name : answers.last_name,
    age : answers.age,
    gender : answers.gender,
    email : answers.email,
    phone_number : answers.phone_number,
    address : {city : answers.city,
        street : answers.street,
        postal_code : answers.postal_code,}

    
} 
console.log(answers);
console.log(registration);