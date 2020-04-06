// add the common header in the right place
fetch('header.html')
    .then(data => data.text())
    .then(html => document.getElementById('header').innerHTML = html);

// add the navbar and highlight the link to the current page
fetch('nav.html')
    .then(data => data.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
        document.querySelectorAll('#navbar > a').forEach(navlink => {
            if (navlink.href == window.location.href)
                navlink.classList.add('current');
        });
    });
