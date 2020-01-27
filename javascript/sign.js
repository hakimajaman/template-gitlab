let signin = document.querySelector(".right-signin");
let register = document.querySelector(".right-signup");

let mainbody = document.querySelector(".main-RegisterBody");
let mainbody2 = document.querySelector(".main-RegisterBody2");

let bottomRegister = document.querySelector(".log-or-reg a[name=register]");
let bottomSignin = document.querySelector(".log-or-reg a[name=signin]");

//function chooseLogin(){
  
//}

function chooseRegist(){
  register.style.display = `block`;
  signin.style.display = `none`;
  mainbody.classList.replace(`main-RegisterBody2`, `main-RegisterBody`);
  bottomRegister.style.borderBottom = `2px solid lightblue`;
  bottomSignin.style.borderBottom = `0px`;
}

function chooseLogin(){
  signin.style.display = `block`;
  register.style.display = `none`;
  mainbody.classList.replace(`main-RegisterBody`, `main-RegisterBody2`);
  bottomSignin.style.borderBottom = `1px solid lightblue`;
  bottomRegister.style.borderBottom = `2px`;
}
