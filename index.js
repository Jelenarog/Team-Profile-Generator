const fs = require("fs");
const inquirer = require("inquirer");
const indexHtml = require('./src/mockup');
//import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = []; // empty array where all answers/employees will be saved

// add intern function add prompt questions for Engineer
function addIntern(){
    inquirer
    .prompt([
            {
                type: "input",
                message: "What is team Intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is team Intern's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is Intern's email address?",
                name: "email"
            },
                        {
                type: "input",
                message: "What is team Intern's School?",
                name: "school"
            },

    ])
    .then((answers) =>{

        const intern= new Intern (answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addMembers();
})}

// add engineer function add prompt questions for Engineer
function addEngineer(){
    inquirer
    .prompt([
            {
                type: "input",
                message: "What is team Engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is team Engineers's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is Engineers's email address?",
                name: "email"
            },
                        {
                type: "input",
                message: "What is team Engineers's Github?",
                name: "github"
            },

    ])
    .then((answers) =>{
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        addMembers();
})}
//function to add different members of employees to the team
function addMembers () {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "action",
            choices: ["Engineer", "Intern",'I do not want to add more employees']
        },
        ])
    
        .then(({action})=>{
            if (action === 'Engineer'){
               addEngineer();
            
            }
            else if (action === 'Intern'){
                addIntern();
             }
             else{
                const htmlContent = indexHtml(team)
                fs.writeFile('index.html', htmlContent, (err) =>
                 err ? console.error(err) : console.log('Success!')
       );

             }

        });
    }

// INIT function to start building team
function init() {
    console.log("Please build your team.");
    inquirer
    .prompt([
            {
                type: "input",
                message: "What is team manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is team manager's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is manager's email address?",
                name: "email"
            },
                        {
                type: "input",
                message: "What is team manager's office number?",
                name: "officeNumber"
            },

    ])

   .then((answers) =>{
       const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    addMembers();
    }
    );
}
init();
