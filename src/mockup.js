const createManagerCard = (manager) => {
  return`
  <div class="col-sm-4">
            <div class="card bg-dark text-light " style="width: 16rem;">
              <div class="card-body">
              <h5 class="card-title ">${manager.name}</h5>
              <p class="card-text">${manager.getRole()}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href='#'>${
                  manager.email
                }</a></li>
                <li class="list-group-item">Office number: ${
                  manager.officeNumber
                }</li>
              </ul>
            </div>
         </div>`;
 
};

const createEngineerCard = (engineer) =>{
return ` <div class="col-sm-4">
<div class="card bg-dark text-light" style="width: 16rem;">
  <div class="card-body">
    <h5 class="card-title ">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${engineer.id}</li>
    <li class="list-group-item">Email:${engineer.email}</li>
    <li class="list-group-item">Github:${engineer.github}</li>
  </ul>
</div>
</div>`

};
const createInternCard = (intern) =>{
  return ` <div class="col-sm-4">
  <div class="card bg-dark text-light" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title ">${intern.name}</h5>
      <p class="card-text">${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${intern.id}</li>
      <li class="list-group-item">Email:${intern.email}</li>
      <li class="list-group-item">School:${intern.school}</li>
    </ul>
  </div>
  </div>`
  
  };
//Function to create HTML file
const indexHtml = (team) => {
  console.log("In my indexHTML function")
  console.log(team);
  var managerCard = createManagerCard(team[0]);
  team.shift()
  console.log(team)
  employeeCards = ""
  for (const member of team) {
    if(member.getRole() === "Engineer"){
     employeeCards+= createEngineerCard(member)
    } else{
      employeeCards += createInternCard(member)
    }
    
  }
  //return `Hey`
  return `<!DOCTYPE html>

  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  
      <title>My Team</title>
  </head>
  <body>
      <div class="container-fluid text-center p-5 mb-5 bg-dark text-light">
      <h1>My Team</h1>
      </div>
      <div class="container">
       <div class="row px-5">
          ${managerCard}
          ${employeeCards}
      </div>
      </div>
  </body>
  </html>`
};

module.exports = indexHtml;
