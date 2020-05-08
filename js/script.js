/*** Section  Loading  ***/

 var loader = document.querySelector(".loading");  
function init(){
  loader.parentNode.removeChild(loader);
}

window.onload = function () {
     setTimeout(() => {
       init();  
     }, 1500); 
  gsap.to(".loading", .2, { opacity: 0,  delay: 1,  }); 
};
 


/*** Section Scroll Down For Section Header  ***/

window.onscroll = function() { scrollDown() };

var navbar = document.getElementById("navbar");
var styleNavbar = navbar.offsetTop;

function scrollDown() {
  if (window.pageYOffset >= styleNavbar) {
    navbar.classList.add("styleNavbar")
  } else {
    navbar.classList.remove("styleNavbar");
  }
}



/*** Section ScrollTo For Section Header  ***/

function goToSection(_sectionName,offest){
 var section = document.getElementById(_sectionName) ;
  gsap.to(window, {duration: 1  , scrollTo: {y: section.offsetTop-offest}});

}



/*** Section Accordion  For Section Services ***/

 var acc = document.getElementsByClassName("accordion");
 var i;
 var preActiveTab =null;
 
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
 var panel = this.nextElementSibling;
    
     for (var j = 0;j < acc.length; j++) {
       
      acc[j].classList.remove("active-tab");
      var panel1 = acc[j].nextElementSibling;
   
      if (panel1.style.maxHeight) {
        panel1.style.maxHeight = null;
      }
      panel.style.display = "none";
    } 
    
    for(n=0;n<acc.length;n++){
      var panel2 = this.nextElementSibling;
      panel2.style.display = "block";
      this.classList.toggle("active-tab");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  
  });

} 
 


/*** Section ScrollMagic For Section About Us ***/

var controller = new ScrollMagic.Controller();
gsap.set('#about-img' , {
  x: -500,opacity:0
 });
 gsap.set('#about-txt' , {
  x:  500,opacity:0
 });

var scene = new ScrollMagic.Scene({
  triggerElement: '#about',  
  duration: 400  
}).on("enter", function (event) {
   gsap.to('#about-img', .5, {
    x: 0,
    opacity:1
   });
   gsap.to('#about-txt', .5, {
    x: 0,
    opacity:1
    ,delay:.3
   });
}); 

controller.addScene([
  scene
]);



/*** Section ScrollMagic For Section Services ***/

var controller = new ScrollMagic.Controller();
gsap.set('#services-img' , {
  x: -500,opacity:0
 });
 gsap.set('#services-txt' , {
  x:  500,opacity:0
 });

var scene = new ScrollMagic.Scene({
  triggerElement: '#services',  
  duration: 400  
}).on("enter", function (event) {
   gsap.to('#services-img', .5, {
    x: 0,
    opacity:1
   });
   gsap.to('#services-txt', .5, {
    x: 0,
    opacity:1
    ,delay:.3
   });
}); 

controller.addScene([
  scene
]);



/*** Section Staggers For Section  Working with dentists */
gsap.set('.container-work', {
  y: 150,
  opacity:0,
 });
 var scene1 = new ScrollMagic.Scene({
  triggerElement: '#work',  
  duration: 100,
  revesre:false
}).on("enter", function (event) {
   gsap.to('.container-work', .5,  {
    y: 0,
    opacity:1,
    stagger: .4,
   });
});
controller.addScene([
  scene1
]);

///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
