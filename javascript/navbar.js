window.onscroll = function() {myFunction()};

let navbar = document.querySelector(".main-Nav");
let brandNav = document.querySelectorAll(".brand-Nav li a");
//let change = document.getElementById("change-Nav");

function myFunction(){
  if(window.pageYOffset > 0){
    //navbar.style.backgroundColor = `white`
    navbar.classList.replace('main-Nav','change-Nav');
    //brandNav.style.color = `#899db8`;
    for(var i=0; i<brandNav.length; i++){
      brandNav[i].style.color = `#333333`;
    }
  } else {
    //navbar.style.backgroundColor = `transparent`
    navbar.classList.replace('change-Nav','main-Nav');
    for(var i=0; i<brandNav.length; i++){
      brandNav[i].style.color = `white`;
    }
  }
}
