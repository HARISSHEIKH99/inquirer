/*import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
    name: "username",
    type: "string",
    message: "what is your name?",
}]);
console.log(chalk.red("welcome!") +answer.username)*/


/* import inquirer from "inquirer";
import chalk from "chalk"; 
let answer = await inquirer.prompt([{
name: "username",
type: 'string',
message: "what is your son name?",
}])
// console.log(chalk.yellow("weicome!") + answer.username//)*/

import inquirer from "inquirer";
import chalk from 'chalk';
let info = await inquirer.prompt([{
name: "person",
type: "string",
message: "are you student? and whold you like to eat biryani?",

}])  
console.log(chalk.blue("ok thank you very much!") + info.person)