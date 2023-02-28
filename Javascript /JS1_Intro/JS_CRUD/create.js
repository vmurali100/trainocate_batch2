// 1. Create a User
var users = [];
var index = null;
function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
}
function addUser() {
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
  };
  clearForm();
  console.log(user);

  // 1. AJAX - Asynchronos Javscript And XML
  //   var postUser = new XMLHttpRequest();
  //   postUser.onreadystatechange = function () {
  //     if (postUser.readyState == 4 && postUser.status == 201) {
  //       console.log("User Added Successfully !!");
  //     }
  //   };
  //   postUser.open("POST","http://localhost:3000/users")
  //   postUser.setRequestHeader('Content-Type','application/json');
  //   postUser.send(JSON.stringify(user))

  // 2. fetch
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log("User Added Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
}
// 2. Get all Users
function getAllUsers() {
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      users = data;
      displayUsers(data);
    });
}
getAllUsers();

function displayUsers(users) {
  document.querySelector("tbody").innerHTML = "";
  users.forEach((usr, i) => {
    var myTr = document.createElement("tr");
    for (a in usr) {
      var myTd = document.createElement("td");
      myTd.innerHTML = usr[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editBtn.innerHTML = "Edit";
    editTd.appendChild(editBtn);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.querySelector("#usersTable").appendChild(myTr);
  });
}
// 3. Update a User

function editUser(i) {
  var userTobeEdited = users[i];
  index = i;
  document.getElementById("fname").value = userTobeEdited.fname;
  document.getElementById("lname").value = userTobeEdited.lname;
  document.getElementById("addUserBtn").style.display = "none";
  document.getElementById("updateUserBtn").style.display = "block";
}
function updateUser() {
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
  };
  fetch("http://localhost:3000/users/" + users[index].id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log("User Added Successfully !!");
    })
    .catch((err) => {
      console.log(err);
    });
  clearForm();
}


// 4. Delete A user

function deleteUser(i){
    fetch("http://localhost:3000/users/" + users[i].id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }      })
        .then((res) => {
          console.log("User Added Successfully !!");
        })
        .catch((err) => {
          console.log(err);
        });
}