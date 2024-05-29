#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\t**************Welcome to my Quiz App!**************"));
let marks = 0;
//Qiestion 1
let quiz1 = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "What is TypeScript?",
        choices: ["a) A database management system", "b) A superset of JavaScript", "c) A CSS preprocessor", "c) A JavaScript framework"]
    },
]);
if (quiz1.question1 === "b) A superset of JavaScript") {
    console.log(chalk.bold.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.bold.red("Incorrect Answer"));
}
//Qiestion 2
let quiz2 = await inquirer.prompt([
    {
        name: "question2",
        type: "list",
        message: "Which of the following types does not exist in TypeScript?",
        choices: ["a) string", "b) boolean", "c) integer", "d) any"]
    },
]);
if (quiz2.question2 === "c) integer") {
    console.log(chalk.bold.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.bold.red("Incorrect Answer"));
}
//Question 3
let quiz3 = await inquirer.prompt([
    {
        name: "question3",
        type: "list",
        message: "How do you define an interface in TypeScript?",
        choices: ["a) interface MyInterface { }", "b) type MyInterface { }", "c) class MyInterface { }", "d) struct MyInterface { }"]
    },
]);
if (quiz3.question3 === "a) interface MyInterface { }") {
    console.log(chalk.bold.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.bold.red("Incorrect Answer"));
}
//Question 4
let quiz4 = await inquirer.prompt([
    {
        name: "question4",
        type: "list",
        message: "What keyword is used to declare a variable in TypeScript that cannot be reassigned?",
        choices: ["a) var", "b) let", "c) const", "d) static"]
    },
]);
if (quiz4.question4 === "c) const") {
    console.log(chalk.bold.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.bold.red("Incorrect Answer"));
}
//Question 5
let quiz5 = await inquirer.prompt([
    {
        name: "question5",
        type: "list",
        message: "How can you explicitly specify a variable type in TypeScript?",
        choices: ["a) let x: number = 5;", "b) let x = number 5;", "c) let x := 5;", "d) let x = 5; number"]
    }
]);
if (quiz5.question5 === "a) let x: number = 5;") {
    console.log(chalk.bold.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.bold.red("Incorrect Answer"));
}
;
//Result
console.log(chalk.bold.yellow("\t**************Result************"));
if (marks >= 4) {
    console.log(chalk.bgGreenBright.white.bold(`\n\tCongratualtion!\n\t Total Marks: 5 \n\t Your Marks: ${marks}`));
}
else {
    console.log(chalk.bgRed.white.bold(`\n\tNeed to work hard!\n\t Total Marks: 5 \n\t Your Marks: ${marks}`));
}
//score
