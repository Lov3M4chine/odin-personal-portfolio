import './styles.css';
import './imgs/placeholder.jpg';
import './imgs/personal-photo.jpg';
import './imgs/personal-photo2.jpg';
import './imgs/personal-photo3.jpg';
import './imgs/professional-photo.png';
import './imgs/professional-photo2.jpg';
import './imgs/razor-top-black.svg';

let wasLinkClicked = false;
let lastScrollTimestamp = 0;
const staggerDelay = 300;

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.slide-in-left, .slide-in-right');
    const links = document.querySelectorAll('a[href^="#"]');
    
    function checkSlide() {
        const currentTime = Date.now();
        const timeSinceLastScroll = currentTime - lastScrollTimestamp;
        
        projects.forEach((project, index) => {
            const slideInAt = (window.scrollY + window.innerHeight) - project.offsetHeight / 4;
            const isSomeShown = slideInAt > project.offsetTop;
            
            if (isSomeShown) {
                if (wasLinkClicked || timeSinceLastScroll < staggerDelay) {
                    setTimeout(() => {
                        project.classList.add('active');
                    }, index * staggerDelay);
                } else {
                    project.classList.add('active');
                }
            }
        });
    }

    function updateWasLinkClicked() {
        wasLinkClicked = true;
    }

    // Initial check to add .active class to already visible projects
    checkSlide();
    
    window.addEventListener('scroll', function() {
        lastScrollTimestamp = Date.now();
        debounce(checkSlide)();
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            updateWasLinkClicked();
            setTimeout(checkSlide, 0);
        });
    });

});

// Debounce function to improve performance on scroll
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
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
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'Disciplined',
    'Versatile',
    'Dedicated',
    'Eager to learn',
    'Eager to teach',
    'Precise',
    'Punctual',
    'Diligent',
    'Detail-Oriented',
    'Meticulous',
    'Personable',
    'Ridiculously Good-looking'
  ]
  
  const el = document.querySelector('.scramble')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()

  let burger = document.getElementById('burger');
  let nav = document.getElementById('main-nav');
  
  // Existing burger button click event listener
  burger.addEventListener('click', function(e){
      this.classList.toggle('is-open');
      nav.classList.toggle('is-open');
  });
  
  // Get all the navigation links
  let navLinks = document.querySelectorAll('.nav-link');
  
  // Attach a click event listener to each navigation link
  navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          
          // Trigger a click event on the burger button
          setTimeout(function() {
            
            // Trigger a click event on the burger button after the delay
            burger.click();

        }, 800);
  
          // If you want to prevent the default action of the link (e.g., jumping to the anchor), 
          // you can uncomment the following line.
          // e.preventDefault();
      });
  });
  





