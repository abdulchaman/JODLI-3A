// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// 
// Responsive navbar
var nav = document.getElementById("navbar");
var menu = document.getElementById("myMenu");
function mobileNav() {
  if (nav.className === "topnav") {
    nav.className += " responsive";
    menu.className += " responsive";
  } else {
    nav.className = "topnav";
    menu.className = "menu";
  }
}

function closemobileNav(){
  nav.className = "topnav";
menu.className = "menu";

}


// Testimonial Swiper

var swiper = new Swiper(".testimonialSwiper", {
    autoplay: {
      delay: 3500
    },
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",

      dynamicBullets: true
    },
    breakpoints:{
      640: {
        slidesPerView: 3
      }
    },
  });