/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', async (event) => {

    // --- NEW: load partial HTML into placeholders ---
    async function loadInto(selector, url) {
        const el = document.querySelector(selector);
        if (!el) return;
        const res = await fetch(url, { cache: "no-cache" });
        if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
        el.innerHTML = await res.text();
    }

    await Promise.all([
        loadInto('#include-about',        'subpages/about.html'),
        loadInto('#include-research',     'subpages/research.html'),
        loadInto('#include-publications', 'subpages/publications.html'),
        loadInto('#include-team',         'subpages/team.html'),
        loadInto('#include-modals',       'subpages/research_modals.html'),
    ]);

    // If the user landed on /#team etc, the browser may have tried before content existed.
    // Force-scroll after subpages are present.
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView();
    }

    // --- your existing code (unchanged logic) ---
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    let scrollSpy = null;
    if (mainNav) {
        scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Ensure ScrollSpy recalculates offsets after dynamic insertion
    if (scrollSpy) {
        scrollSpy.refresh();
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
