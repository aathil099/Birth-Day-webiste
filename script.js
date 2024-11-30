// Elements
const startButton = document.getElementById("startButton");
const initialSection = document.getElementById("initial-section");
const countdownSection = document.getElementById("countdown-section");
const cakeSection = document.getElementById("cake-section");
const cuttingSection = document.getElementById("cutting-section");
const countdownElement = document.getElementById("countdown");
const candle = document.getElementById("candle");
const flame = document.querySelector(".flame");
const nextButton = document.getElementById("nextButton");
const secondPage = document.getElementById("second-page");
const exitButton = document.getElementById("exitButton");

// Start Heart Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);

// Start Button Click: Move to Countdown
startButton.addEventListener("click", () => {
  initialSection.style.display = "none";
  countdownSection.style.display = "block";
  startCountdown();
});

// Countdown
function startCountdown() {
  let countdown = 3;
  const interval = setInterval(() => {
    countdownElement.textContent = countdown;
    countdown--;
    if (countdown < 0) {
      clearInterval(interval);
      countdownSection.style.display = "none";
      cakeSection.style.display = "block";
    }
  }, 800);
}

// Blow Out Candle
candle.addEventListener("click", () => {
  flame.style.display = "none";
  setTimeout(() => {
    cakeSection.style.display = "none";
    cuttingSection.style.display = "block";

        // Show the poem after the cake section disappears
        const poem = document.getElementById("poem");
        poem.style.display = "block";
        setTimeout(() => {
            poem.classList.add("fade-in-poem");
          }, 500); // Delay to create a sequential effect
          
        const cuttingElements = document.querySelectorAll("#cutting-section img, #cutting-section p");
        fadeInElements(cuttingElements);
  }, 1000);
});

// Next Button Click: Move to Second Page
nextButton.addEventListener("click", () => {
    cuttingSection.style.display = "none";
    secondPage.style.display = "block";
  });

    const secondPageElements = document.querySelectorAll("#second-page img, #second-page p");
    fadeInElements(secondPageElements);
    exitButton.addEventListener("click", () => {
    window.close(); // This will attempt to close the window. (Works only if opened via script)
    
    // If window.close() doesn't work (like if it's not opened via script), you can redirect the user:
    // window.location.href = "https://www.example.com"; // Navigate to a different page instead.
  });

  function fadeInElements(elements, delay = 500) {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * delay);
    });
  }