const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");

window.addEventListener("scroll", () => {
  if (!skillsPlayed) skillsCounter();
  if (!mlPlayed) mlCounter();
});

/* ================ STICKY NAVBAR* ================== */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* ====================REVEAL ANIMATION =================*/
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* ====================PROGRESS BAR ANIMATION =================*/
function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;

  if (window.innerHeight >= topPosition + el.offsetHeight) return true;
  return false;
}

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}

let skillsPlayed = false;

function skillsCounter() {
  if (!hasReached(first_skill)) return;

  skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 427 - 427 * (target / 100);

    progress_bars[i].style.setProperty("--target", strokeValue);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  progress_bars.forEach(
    (p) => (p.style.animation = "progress 2s ease-in-out forwards")
  );
}

/* ====================SERVICES ANIMATION =================*/

let mlPlayed = false;

function mlCounter() {
  if (!hasReached(ml_section)) return;
  mlPlayed = true;

  ml_counters.forEach((ctr) => {
    let target = +ctr.dataset.target;

    setTimeout(() => {
      updateCount(ctr, target);
    }, 400);
  });
}
mlCounter();

/* ====================PORTFOLIO FILTER ANIMATION =================*/

let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".prt-card",
  },
  animation: {
    duration: 500,
  },
});

/* ================ MODAL POP UP ANIMATION ================== */
zoom_icons.forEach((icn) =>
  icn.addEventListener("click", () => {
    prt_section.classList.add("open");
  })
);

modal_overlay.addEventListener("click", () =>
  prt_section.classList.remove("open")
);
