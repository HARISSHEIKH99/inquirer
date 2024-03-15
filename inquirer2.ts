import inquirer from "inquirer";
const input4 = await inquirer.prompt([{
    name: "num5",
    type: "number",
    message: "kindly enter your first no:"
}])

const input5 = await inquirer.prompt([{
    name: "num6",
    type: "number",
    message: "kindly enter your second no:"
}])
let total: "number" = input4.num5 + input5.num6

console.log(total)