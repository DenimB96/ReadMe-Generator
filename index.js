// Made variables for inquirer and fs. Also made a variable linking to the generateMarkdown file.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Created a variable for the array of questions needed for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["Apache 2.0", "BSD 3", "GPL 3.0", "MIT", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Created a function to write the ReadMe file, or return a error if it cannot do so
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Congrats your file has been generated!: ${fileName}`);
  });
}

// A function to intialize the app and a console log telling the user if everything was successful and a error if it cannot
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
      console.log("We have successfully generated README.md");
    })
    .catch((error) => {
      console.error(error);
    });
}
// Call to initialize app
init();
