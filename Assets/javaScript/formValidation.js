function store() {
  var usrName = document.getElementById("email").value;
  var usrPw = document.getElementById("pw").value;

  let stored_users = JSON.parse(localStorage.getItem("users"));

  if (stored_users) {
    stored_users.push({ name: usrName, password: usrPw });
    localStorage.setItem("users", JSON.stringify(stored_users));
    return alert("Your account has been created succesfully.");
  } else {
    localStorage.setItem(
      "users",
      JSON.stringify([{ name: usrName, password: usrPw }])
    );
  }
}

function check() {
  var usrName = document.getElementById("email").value;
  var usrPw = document.getElementById("pw").value;

  let stored_users = JSON.parse(localStorage.getItem("users"));
  if (stored_users) {
    for (let u = 0; u < stored_users.length; u++) {
      if (
        usrName == stored_users[u].name &&
        usrPw == stored_users[u].password
      ) {
        alert("You are logged in as " + usrName);
        return window.open("../index.html");
      }
    }
  } else {
    localStorage.setItem("users", "[]");
  }

  return alert("Access denied. Valid username and password is required.");
}
