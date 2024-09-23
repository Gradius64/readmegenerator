
import inquirer from "inquirer"
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown"
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name:"title",
        message:"What's the name of my project?"

    }, {
        type: "input",
        name: "Description",
        message: "What is the description of the project?"

       

    


    }, {
        type: "input",
        name: "installation",
        message: "What is the installation of the project?"

    }, {
        type: "input",
        name: "usage",
        message: "What is the usage of the project?"

    }, {
        type: "input",
        name: "contribution",
        message: "What is the contribution of the project?"

    }, {

        type: "input",
        name: "test",
        message: "what is the test of the project?"


    }



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(data)
    })
}

// Function call to initialize app
init();
