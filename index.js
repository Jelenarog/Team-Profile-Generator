const fs = require("fs");
const inquirer = require("inquirer");
const htmlFile = require('./src/mockup');


// //function to start engineer

// function employeeCheck (intern, engineer) {
//     if (intern) {
//     console.log('works');
//     } else if (engineer) {
//     return engineer;
//     } 
//   }

function init() {
    console.log("Please build your team.");
    inquirer
    .prompt([
        //const manager = [
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
                message: "What is team manager's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is team manager's office number?",
                name: "office"
            },
        
// //const employeeSelection = [
    

    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices:["Engineer", "Intern"],
        validate: (answer) => {
            if (answer === "Yes") {
              return true;
            }
          },
    },
   ]
   )
   .then((answers) =>{
   // const htmlContent = indexHtml(answers)
    const htmlContent = htmlFile.indexHtml(answers)
    fs.writeFile('index.html', htmlContent, (err) =>
    err ? console.error(err) : console.log('Success!')
       );
    }
    );

}
init();