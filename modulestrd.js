import inquirer from "inquirer";
let information = await inquirer.prompt([{
        name: "fullName",
        type: "string",
        message: "I Love My Husband And My Lovely Son!",
    }]);
console.log("I Said!" + information.fullNam
