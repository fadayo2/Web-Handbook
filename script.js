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

// Function to toggle the specific link's theme
function toggleLinkTheme(link) {
    // Remove styles from all links first
    document.querySelectorAll('.sideNav a').forEach(a => {
        a.style.backgroundColor = '';
        a.style.color = '';
    });

    // Apply styles to the clicked link
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        link.style.backgroundColor = 'black'; // Opposing theme
        link.style.color = 'white';
    } else if (theme === 'dark') {
        link.style.backgroundColor = 'white'; // Opposing theme
        link.style.color = 'black';
    }
}