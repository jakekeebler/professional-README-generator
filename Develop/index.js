// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What will the project title be?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Provide some installation instructions:',
        name: 'projectInstall',
    },
    {
        type: 'input',
        message: 'How do users use this project/application?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'What are the guidelines for contributing to this project?',
        name: 'projectGuidelines',
    },
    {
        type: 'input',
        message: 'Provide some test instructions:',
        name: 'projectTest',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'projectLicense',
        choices: ['mit', 'unlicense', 'agpl-3.0', 'mpl-2.0', 'apache-2.0']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'projectUsername',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'projectEmail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README created.')
)}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(response => {
        writeToFile('README.md', generateMarkdown(response));

    })
}

// Function call to initialize app 
init();
