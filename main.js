#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`Sorry you have insufficient..! balance your current balance is${myBalance}`);
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                type: "list",
                name: "fast",
                message: "chose your amount",
                choices: [5000, 2000, 1000, 3000]
            }
        ]);
        if (fastCash.fast > myBalance) {
            console.log(`your balance is insufficient...! your current balance is ${myBalance}`);
        }
        else {
            console.log(`your remaining balance is ${myBalance - Number(fastCash.fast)}`);
        }
        ;
    }
}
else {
    console.log("Incorrect pin number");
}
