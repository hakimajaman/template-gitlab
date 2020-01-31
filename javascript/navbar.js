window.onscroll = function() {myFunction()};

let navbar = document.querySelector(".main-Nav");
let brandNav = document.querySelectorAll(".brand-Nav li a");

let drop = document.querySelector(".dropdown");

function myFunction(){
  if(window.pageYOffset > 0){
    navbar.classList.replace('main-Nav','change-Nav');
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

function dropFunc(){
  var z = 0;
  if(z == 0){
    drop.style.visibility = `hidden`;
  }
  else if(z+=1){
    drop.style.visibility = `visible`;
  }
  console.log(z);
}
