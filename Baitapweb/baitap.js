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
    // document.getElementById("success").innerHTML = "success ";
  } else {
    // document.getElementById("success").innerHTML = "faile ";
  }
}
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

document
  .getElementById("handle-switch")
  .addEventListener("click", handleSwitch);
function handleSwitch() {
  console.log(`cliick`);
  let num = document.getElementById("switch-p").textContent;
  let newNum = switchNum(num);
  console.log(`num = ${newNum}`);
  document.getElementById("switch-p").innerHTML = newNum;
}

function switchNum(num) {
  if (num == "29") return "49";
  else return "29";
}

function showSlides(slideNum) {
  let preSlides = document.getElementById("oc-transform");
  let element = document.querySelector(".oc-slide-item");


  if (slideNum === 1) {
    preSlides.style.transitionDuration="1s";
    preSlides.style.transform=`translateX(-50%)`;
    setTimeout(()=>{
      preSlides.style.transitionDuration="0s";

      preSlides.style.transform=`translateX(0%)`;      
      preSlides.removeChild(element);
      preSlides.appendChild(element);      
    },1000)
  }

  if (slideNum === -1) {
    if( preSlides.style.transform===`translateX(0%)`|| !preSlides.style.transform){
      console.log(`translateX=0%`)
      preSlides.style.transitionDuration="0s";
      preSlides.style.transform=`translateX(-50%)`;     
     preSlides.removeChild(element);
      preSlides.appendChild(element);
    }
    setTimeout(()=>{
      preSlides.style.transitionDuration="1s";
    preSlides.style.transform=`translateX(0%)`;  
    },10)
  }
}