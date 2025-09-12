// Example: Smooth scroll for anchor links (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Placeholder for carousel functionality (if you want to add it later)
  const testimonials = document.querySelector('.testimonials');
  let currentTestimonialIndex = 0;
  
  // Optional: automatic carousel rotation
  setInterval(() => {
    const testimonialsCount = document.querySelectorAll('.testimonial').length;
    const current = document.querySelector('.testimonials').children[currentTestimonialIndex];
  
    // Hide current
    current.style.display = 'none';
  
    // Move to next
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsCount;
  
    // Show next
    document.querySelectorAll('.testimonial')[currentTestimonialIndex].style.display = 'block';
  }, 3000); // Change every 3 seconds
  