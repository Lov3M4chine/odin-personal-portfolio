import "./styles.css";
import "./imgs/placeholder.jpg";
import "./imgs/personal-photo.jpg";
import "./imgs/personal-photo2.jpg";
import "./imgs/personal-photo3.jpg";
import "./imgs/professional-photo.png";
import "./imgs/professional-photo2.jpg";
import "./imgs/razor-top-black.svg";

// ——————————————————————————————————————————————————
// Projects Slide-In
// ——————————————————————————————————————————————————
let wasLinkClicked = false;
let lastScrollTimestamp = 0;
const staggerDelay = 300;

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".slide-in-left, .slide-in-right");
  const links = document.querySelectorAll('a[href^="#"]');

  function checkSlide() {
    const currentTime = Date.now();
    const timeSinceLastScroll = currentTime - lastScrollTimestamp;

    projects.forEach((project, index) => {
      const slideInAt =
        window.scrollY + window.innerHeight - project.offsetHeight / 4;
      const isSomeShown = slideInAt > project.offsetTop;

      if (isSomeShown) {
        if (wasLinkClicked || timeSinceLastScroll < staggerDelay) {
          setTimeout(() => {
            project.classList.add("active");
          }, index * staggerDelay);
        } else {
          project.classList.add("active");
        }
      }
    });
  }

  function updateWasLinkClicked() {
    wasLinkClicked = true;
  }
  
  checkSlide();

  window.addEventListener("scroll", function () {
    lastScrollTimestamp = Date.now();
    debounce(checkSlide)();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      updateWasLinkClicked();
      setTimeout(checkSlide, 0);
    });
  });
});

// Debounce function to improve performance on scroll
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  "Disciplined",
  "Versatile",
  "Dedicated",
  "Eager to learn",
  "Eager to teach",
  "Precise",
  "Punctual",
  "Diligent",
  "Detail-Oriented",
  "Meticulous",
  "Personable",
  "Ridiculously Good-looking",
];

const el = document.querySelector(".scramble");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2800);
  });
  counter = (counter + 1) % phrases.length;
};

next();

// ——————————————————————————————————————————————————
// Mobile Navigation
// ——————————————————————————————————————————————————

let burger = document.getElementById("burger");
let nav = document.getElementById("main-nav");
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    setTimeout(function () {
      burger.click();
    }, 800);
  });
});


burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  nav.classList.remove("hidden");
  toggleScroll();
});


function toggleScroll() {
  document.body.classList.toggle('no-scroll');
}

// ——————————————————————————————————————————————————
// Link Event Listeners
// ——————————————————————————————————————————————————

let homeLink = document.querySelectorAll(".home-link");
let projectsLink = document.querySelectorAll(".projects-link");
let aboutLink = document.querySelectorAll(".about-link");
let contactLink = document.querySelectorAll(".contact-link");
let homeSection = document.getElementById("home-section");
let projectSection = document.getElementById("projects-section");
let aboutSection = document.getElementById("about-section");
let contactSection = document.getElementById("contact-section");
let currentSection = homeSection;
let userInitiatedNavigation = false;



function navigate(hash) {

  if (hash === '') {
    hash = '#home';
  }
  
  const sectionName = hash.replace('#', '');
  const section = document.getElementById(sectionName + '-section');
 
  if (currentSection === section) {
    return;
  }
 
  if (userInitiatedNavigation) {
    currentSection.classList.add('fade-out');
 
    setTimeout(function() {
      currentSection.classList.add('hidden');
      currentSection.classList.remove('fade-out');
      section.classList.remove('hidden');
      section.classList.add('fade-in');
 
      setTimeout(function() {
        section.classList.remove('fade-in');
        currentSection = section;
        scrollToTop();
      }, 1000);
 
    }, 1000);
  } else {
    currentSection.classList.add('hidden');
    section.classList.remove('hidden');
    currentSection = section;
    scrollToTop();
  }
  
  // Reset the flag after navigation
  userInitiatedNavigation = false;
 }
 

 function scrollToTop() {
  // Save the current scroll behavior
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;

  // Temporarily disable smooth scrolling
  document.documentElement.style.scrollBehavior = 'auto';

  // Scroll to the top instantly
  window.scrollTo(0, 0);

  // Restore the original scroll behavior after the scroll
  document.documentElement.style.scrollBehavior = originalScrollBehavior;
}


window.addEventListener('hashchange', function() {
  navigate(window.location.hash);
});

navigate(window.location.hash || '#home');

homeLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    userInitiatedNavigation = true;
    window.location.hash = 'home';
    setTimeout(function(){
      location.reload();
    }, 2000);
  });
});

projectsLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    userInitiatedNavigation = true;
    window.location.hash = 'projects';
  });
});

aboutLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    userInitiatedNavigation = true;
    window.location.hash = 'about';
  });
});

contactLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    userInitiatedNavigation = true;
    window.location.hash = 'contact';
  });
});

window.addEventListener('popstate', function(event) {
  // Get the current hash from the URL
  let hash = window.location.hash;
  
  if (hash === '' || hash === '#home') {
    setTimeout(function(){
      location.reload();
    }, 2000);
  }
});


// ——————————————————————————————————————————————————
// Scanline Event Listener
// ——————————————————————————————————————————————————

function checkScreenSize() {
  const breakpoint = 1200;

  if (window.innerWidth > breakpoint) {
    homeSection.classList.add('single-scanline');
    projectSection.classList.add('single-scanline');
    aboutSection.classList.add('single-scanline');
    contactSection.classList.add('single-scanline');
  } else {
    homeSection.classList.remove('single-scanline');
    projectSection.classList.remove('single-scanline');
    aboutSection.classList.remove('single-scanline');
    contactSection.classList.remove('single-scanline');
  }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);





