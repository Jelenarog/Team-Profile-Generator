//Function to create HTML file
const indexHtml = ({name,type,id,email,office}) =>`<!DOCTYPE html>

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
        <div class="col-sm-4">
    <div class="card bg-dark text-light " style="width: 16rem;">
        <div class="card-body">

          <h5 class="card-title ">${name}</h5>
          <p class="card-text">${type}Type of team member</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href='#'>${email}</a></li>
          <li class="list-group-item">Office number: ${office}</li>
        </ul>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card bg-dark text-light" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title ">Team member name</h5>
          <p class="card-text">Type of team member</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">School:</li>
        </ul>
      </div>
    </div>
     <div class="col-sm-4">
      <div class="card bg-dark text-light" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title ">Team member name</h5>
          <p class="card-text">Type of team member</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">School:</li>
        </ul>
  </div>
    </div>
    </div>
</body>
</html>`
module.exports = {
    indexHtml
  };
  