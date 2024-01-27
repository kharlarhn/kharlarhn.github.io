document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  

 // Add this script to your page to adjust the initial state
document.addEventListener('DOMContentLoaded', function() {
  var homeImage = document.querySelector('.image-container');
  homeImage.style.opacity = '1'; // Set initial opacity to 1 after the page has loaded
});

// script.js

window.onload = function() {
  var progressBars = document.querySelectorAll(".progress-bar");
  
  // Add the class "animate-progress" to trigger the animation for all progress bars
  progressBars.forEach(function(bar) {
    bar.classList.add("animate-progress");
  });
};

// JavaScript for Works Page
function previewWorksItem(itemId) {
  // Implement preview logic for the specified works item
  console.log(`Preview Works Item ${itemId}`);
}

function editWorksItem(itemId) {
  // Implement edit logic for the specified works item
  console.log(`Edit Works Item ${itemId}`);
}

function attachBox1Image(itemId) {
  // Implement logic to attach Box 1 image for the specified works item
  console.log(`Attach Box 1 Image for Works Item ${itemId}`);
}

// Add more JavaScript functions for other actions as needed

