// NAVBAR

function toggleMenu() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('show');
  }

  window.addEventListener('resize', () => {
    const dropdown = document.getElementById('dropdown-menu');
    if (window.innerWidth > 768) {
      dropdown.classList.remove('show');
    }
  });


