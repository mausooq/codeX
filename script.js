document.addEventListener('DOMContentLoaded', function() {
    // Get the profile mini and nav menu elements
    const profileMini = document.querySelector('.profile-mini');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuBackdrop = document.querySelector('.nav-menu-backdrop');

    // Toggle menu when clicking profile
    profileMini.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navMenuBackdrop.classList.toggle('active');
    });

    // Close menu when clicking backdrop
    navMenuBackdrop.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navMenuBackdrop.classList.remove('active');
    });

    // Close menu when clicking a menu item
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navMenuBackdrop.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-profile') && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navMenuBackdrop.classList.remove('active');
        }
    });
});
