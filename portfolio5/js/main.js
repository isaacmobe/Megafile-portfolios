// IMAGE EXPANSION
document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.getElementById("profileImage");
  const imageCard = document.querySelector(".image__card");

  profileImage.addEventListener("click", function (event) {
    event.stopPropagation();
    profileImage.classList.toggle("expanded");
  });

  document.addEventListener("click", function (event) {
    if (!imageCard.contains(event.target)) {
      profileImage.classList.remove("expanded");
    }
  });
});

// // NAVBAR ON SCROLL
// window.addEventListener("scroll", function () {
//   const navBar = document.querySelector(".nav__bar");
//   if (window.scrollY > 0) {
//     navBar.classList.add("fixed");
//   } else {
//     navBar.classList.remove("fixed");
//   }
// });

const navBar = document.querySelector(".nav__bar");
const mainSection = document.querySelector("main");

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    navBar.classList.add("fixed");
    mainSection.style.paddingTop = navBar.offsetHeight + "px";
  } else {
    // Scrolling up
    if (currentScrollPos === 0) {
      // Reached the top of the page
      navBar.classList.remove("fixed");
      mainSection.style.paddingTop = "0";
    }
  }

  prevScrollPos = currentScrollPos;
});

// // AUTO SMOOTH SCROLL
// // Slow scroll to the bottom of the page
// document.querySelector('a.nav__link[href="#home"]').addEventListener('click', function (e) {
//   e.preventDefault();
//   const target = document.querySelector(this.getAttribute('href'));
//   target.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
//   });
// });

const autoLink = document.getElementById("auto-link");
const mainContent = document.getElementById("main-content");

autoLink.addEventListener("click", function () {
  mainContent.classList.toggle("zoomed");
});


// SCROLL UP
