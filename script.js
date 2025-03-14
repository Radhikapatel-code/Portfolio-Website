// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic Active Navigation Link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
  // Lazy Load for Video Background
  const aboutSection = document.getElementById('about');
  const video = document.getElementById('about-video');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.setAttribute('autoplay', true);
        video.setAttribute('playsinline', true);
        video.setAttribute('muted', true);
        video.setAttribute('loop', true);
        video.play();
      }
    });
  });
  
  observer.observe(aboutSection);
  
  // Dynamic Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
  
      projects.forEach(project => {
        if (filter === 'all' || project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
  
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
  // Form Validation for Contact Section
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
