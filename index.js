// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
      },
      {
        type: 'input',
        name: 'motivations',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'what',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License:',
      },
      {
        type: 'input',
        name: 'what',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },

];

function generateReadme(answers) {
    return `
  # \x1b[36m${answers.title}\x1b[0m
  
  ## Description
  ${answers.description}
  
  ## Motivation
  ${answers.motivations}
  
  ## Why
  ${answers.why}
  
  ## Problem Solved
  ${answers.what}
  
  ## What I Learned
  ${answers.learn}

  ## Table of Contents

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credit}

  ## License
  ${answers.license}
  `;
  }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File '${fileName}' has been saved.`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const fileName = 'README.md';
        const readmeContent = generateReadme(answers);
  
        writeToFile(fileName, readmeContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function call to initialize app
init();
