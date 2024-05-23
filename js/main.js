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