document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("collab-modal");
  var btn = document.getElementById("collab-btn");
  var closeBtn = document.querySelector(".close");

  btn.onclick = function () {
      modal.style.display = "block";
  };

  closeBtn.onclick = function () {
      modal.style.display = "none";
  };

  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
});



document.addEventListener('DOMContentLoaded', () => {
    const openingScreen = document.getElementById('opening-screen');
  
    // Total duration of animations (4.5s + 1s fade-out)
    setTimeout(() => {
      // Add fade-out animation to the opening screen
      openingScreen.style.animation = 'fadeOut 1s ease forwards';
  
      // Remove the overlay from the DOM after it fades out
      setTimeout(() => {
        openingScreen.style.display = 'none';
      }, 1000); // 1s for the fade-out animation
    }, 3000); // 1.5s per word * 3 words
  });
  
  const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 330;
});

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 330;
});

let lastScrollTop = 0;
const navbar = document.getElementById("ftco-navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll Down
    navbar.style.top = "-70px"; // Adjust to navbar height
  } else {
    // Scroll Up
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Create stars dynamically in the background
function createStars() {
  const numberOfStars = 200; // Number of stars to generate
  const starField = document.createElement('div');
  starField.classList.add('star-field');
  document.body.appendChild(starField);

  for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 2 + 1; // Random size for each star
      const positionX = Math.random() * 100; // Random horizontal position
      const positionY = Math.random() * 100; // Random vertical position
      const animationDelay = Math.random() * 2 + 's'; // Random animation delay

      // Apply random values to style
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${positionX}%`;
      star.style.top = `${positionY}%`;
      star.style.animationDelay = animationDelay;

      starField.appendChild(star);
  }
}

// Initialize stars
createStars();
