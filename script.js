
gsap.registerPlugin(ScrollTrigger);

// var tl = gsap.timline();
gsap.from(".containersOfManufacture ", {
  opacity: 0,
  y: 500,

  duration: 2,
  delay: 0,
  
  scrollTrigger: ".containersOfManufacture "

})

gsap.from(".bike-listing-container", {
  opacity: 0,
  x: 400,

  duration: 2,
  delay: 0,
  
  scrollTrigger: ".bike-listing-container"
});





gsap.from(".box", {
  opacity: 0,
  // x: "50%",
  y: "500px",
  duration: 0.7,
  delay: 2.5,
  // repeat: -1,
  yoyo: true,
  stagger: 1

})
gsap.from(".box h2", {
  opacity: 0,
  // x: "50%",
  y: "700px",
  duration: 0.7,
  delay: 2.5,
  // repeat: -1,
  yoyo: true
  , stagger: 1
})

gsap.from(".videosection video", {
  opacity: 0,
  // x: "50%",
  // y: "700px",
  duration: 3,
  // delay: 1,
  // repeat: -1,
  yoyo: true

})
gsap.from(".tagline h1", {
  opacity: 0,

  // y: "700px",
  duration: 1,
  delay: 7,
  // repeat: -1,
  yoyo: true

})


// Animate navbar links

gsap.from(".navlinks ", {
  opacity: 1,

  y: -70,
  duration: 1.5,
  delay: 3,
  stagger: 1,

});
gsap.from("#scrollable-section h1 ", {
  opacity: 0,

  y: 100,
  duration: 2,
  delay: 1,
  stagger: 1,
  scrollTrigger: "#scrollable-section h1",
  yoyo: true
});



gsap.from(".form", {
  opacity: 0,
  x: 400,

  duration: 2,
  delay: 1,
  
  scrollTrigger: ".form"
});


gsap.from(".book-test-ride img", {
  scale: 0,
  // x: 100,

  duration: 2,
  delay: 1,

  scrollTrigger: "#test-ride"
});

gsap.from("footer", {
  opacity: 0,
  y: 200,

  duration: 3,
  delay: 3,
  stagger: 1,
  scrollTrigger: "footer"
});



// script.js

var body = document.querySelector("#body");
var crsr = document.querySelector(".cursor");

body.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.clientX + "px";
  crsr.style.top = dets.clientY + "px";
});

// **************************


// Select the menu icon, close icon, and the popup navlinks container
const menuIcon = document.querySelector('.navlinks i');
const closeIcon = document.querySelector('.popup-navlinks i');
const popupNavLinks = document.querySelector('.popup-navlinks');

// Function to toggle the popup navlinks visibility
function toggleNavLinks() {
  if (popupNavLinks.style.display === 'flex') {
    popupNavLinks.style.display = 'none';
  } else {
    popupNavLinks.style.display = 'flex';
  }
}

// Add a click event listener to the menu icon to open the popup
menuIcon.addEventListener('click', toggleNavLinks);

// Add a click event listener to the close icon to close the popup
closeIcon.addEventListener('click', () => {
  popupNavLinks.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
  const scrollStep = 200; // Adjust as needed for smooth scrolling
  const container = document.querySelector('.bike-listing-container');
  const cards = document.querySelector('.bike-cards');
  const prevButton = document.querySelector('.bike-prev');
  const nextButton = document.querySelector('.bike-next');

  // Navigate to previous cards
  prevButton.addEventListener('click', function () {
    cards.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  // Navigate to next cards
  nextButton.addEventListener('click', function () {
    cards.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
});



//manufacture js
// manufacture js

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.heading1');
  const duration = 2000; // Duration for all counters in milliseconds
  const maxTarget = Math.max(...Array.from(counters).map(counter => +counter.getAttribute('data-target')));

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const text = counter.innerText.replace(/[0-9]/g, ''); // Get non-numeric part of the text
    const increment = target / (duration / 17); // Calculate increment based on duration and updates per second

    const updateCount = () => {
      const count = +counter.innerText.replace(/[^0-9]/g, ''); // Get only numeric part of the text

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}${text}`;
        setTimeout(updateCount, 17); // Approx 60 updates per second (1000ms/60frames ≈ 17ms)
      } else {
        counter.innerText = `${target.toLocaleString()}${text}`;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});




// Set the current year in the copyright notice
document.getElementById("year").textContent = new Date().getFullYear();


//scroll trigger




