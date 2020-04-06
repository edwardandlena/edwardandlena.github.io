// add the common header in the right place
fetch('header.html')
    .then(data => data.text())
    .then(function(html) {
        document.querySelector('header').innerHTML = html;

        // highlight the link to the current page
        document.querySelectorAll('nav a').forEach(navlink => {
            if (navlink.href == window.location.href)
                navlink.classList.add('current');
        });
    });
