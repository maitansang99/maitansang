function renderInfo(e) {
  e.preventDefault();
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  console.log(`Name: ${name}   Email: ${email}  Password: ${password}`);
  checkName(name);
  checkEmail(email);
  checkPassword(password);
  if (
    checkName(name) === true &&
    checkEmail(email) === true &&
    checkPassword(password) === true
  ) {
    document.getElementById("success").innerHTML = "success ";
  } else {
    document.getElementById("success").innerHTML = "faile ";
  }
}

// let inputName = document.getElementById("name");
// inputName.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("bt-download").click();
//   }
// });

// let inputPassword = document.getElementById("password");
// inputPassword.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("bt-download").click();
//   }
// });

// let inputEmail = document.getElementById("email");
// inputEmail.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("bt-download").click();
//   }
// });

const checkName = (name) => {
  if (name.length == 0) {
    document.getElementById("validateName").innerHTML = "empty name";
  } else {
    document.getElementById("validateName").innerHTML = "";
    return true;
  }
};
const checkEmail = (email) => {
  if (email.length == 0) {
    document.getElementById("validateEmail").innerHTML = "empty email";
  } else {
    document.getElementById("validateEmail").innerHTML = "";
    return true;
  }
};
const checkPassword = (password) => {
  if (password.length == 0) {
    document.getElementById("validatePassword").innerHTML = "empty password";
  } else if (password.length < 8) {
    document.getElementById("validatePassword").innerHTML =
      "length of password must over 8 index";
  } else {
    document.getElementById("validatePassword").innerHTML = "";
    return true;
  }
};
