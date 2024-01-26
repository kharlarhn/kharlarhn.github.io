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
  
// JavaScript for Image Slider
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".image-slider");
    const slides = document.querySelectorAll(".slide");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const newPosition = index * -100 + "%";
      slider.style.transform = "translateX(" + newPosition + ")";
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Handle navigation buttons
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  });
  