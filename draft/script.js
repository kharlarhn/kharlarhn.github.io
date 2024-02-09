function scrollToSection(sectionId, link) {
  document.querySelectorAll('nav a').forEach(function (a) {
      a.classList.remove('active');
  });
  link.classList.add('active');
  // Add your scrolling logic here if needed
}


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

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var banner = document.getElementById("banner");
    banner.classList.add("slide-in");
  }, 2000); // 2000 milliseconds = 2 seconds
  
  // Get the close button element
  var closeButton = document.querySelector(".close-btn img");
  
  // Add a click event listener to the close button
  closeButton.addEventListener("click", function() {
    // Slide up and hide the banner
    var banner = document.getElementById("banner");
    banner.classList.add("banner-hidden");
  });
});
