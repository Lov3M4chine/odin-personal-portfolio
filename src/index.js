import './styles.css';
import './imgs/placeholder.jpg';
import './imgs/personal-photo.jpg';
import './imgs/personal-photo2.jpg';
import './imgs/personal-photo3.jpg';
import './imgs/professional-photo.png';
import './imgs/professional-photo2.jpg';

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






