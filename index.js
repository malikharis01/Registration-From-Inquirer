#! /usr/bin/env node
import { questions } from "./questions.js";
import inquirer from "inquirer";
let answers = await inquirer.prompt(questions);
let registration = {
    first_name: answers.first_name,
    last_name: answers.last_name,
    age: answers.age,
    gender: answers.gender,
    email: answers.email,
    phone_number: answers.phone_number,
    address: { city: answers.city,
        street: answers.street,
        postal_code: answers.postal_code, }
};
console.log(answers);
console.log(registration);
