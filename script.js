// Check local storage for theme preference on page load
window.onload = function () {
    if (localStorage.getItem('theme') === 'light') {
        light();
    } else if (localStorage.getItem('theme') === 'dark') {
        dark();
    } else {
        dark(); // Default theme
    }

    // Add event listeners to all anchor tags
    const links = document.querySelectorAll('.sideNav a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent page refresh
            toggleLinkTheme(event.target); // Call toggle function
        });
    });
};

function light() {
    document.body.classList.add('lightmode');
    document.body.classList.remove('nightmode');
    document.getElementById('moon').style.visibility = 'hidden';
    document.getElementById('sun').style.visibility = 'visible';
    document.getElementById('image').setAttribute('src', 'asset/black.png');
    localStorage.setItem('theme', 'light');
}

function dark() {
    document.body.classList.add('nightmode');
    document.body.classList.remove('lightmode');
    document.getElementById('moon').style.visibility = 'visible';
    document.getElementById('sun').style.visibility = 'hidden';
    document.getElementById('image').setAttribute('src', 'asset/white.png');
    localStorage.setItem('theme', 'dark');
}

// Get all the anchor links
const links = document.querySelectorAll('.nav-link');

// Function to set 'active' class to the clicked link and store it in localStorage
links.forEach((link, index) => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
        
        // Store the index of the active link in localStorage
        localStorage.setItem('activeLink', index);
    });
});

// Check if there's a stored active link on page load
window.addEventListener('load', () => {
    const activeIndex = localStorage.getItem('activeLink');
    
    // If there's a stored active link, apply the 'active' class
    if (activeIndex !== null) {
        links[activeIndex].classList.add('active');
    } else {
        // Default to the first link if no active link is stored
        links[0].classList.add('active');
    }
});