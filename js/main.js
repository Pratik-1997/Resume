window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition < 400) {
      document.getElementById('aboutLink').classList.add('active');
    } else {
      document.getElementById('aboutLink').classList.remove('active');
    }
    
    if (scrollPosition >= 400 && scrollPosition < 800) {
      document.getElementById('expLink').classList.add('active');
    } else {
      document.getElementById('expLink').classList.remove('active');
    }
    
    if (scrollPosition >= 800) {
      document.getElementById('projLink').classList.add('active');
    } else {
      document.getElementById('projLink').classList.remove('active');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('main .sm-right-block');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
