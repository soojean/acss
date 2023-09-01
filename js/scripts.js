/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// function toggleLanguage(language) {
//     let description = document.getElementById("description");
//     if (language === "Korean") {
//       description.innerHTML = "Show Korean Text";
//     }
//     else {
//       description.innerHTML = "Show English Text";
//     }
// }
const btn = document.getElementById('btn1');
var project_title_eng = document.getElementById('project1_title_eng')
var project_content_eng = document.getElementById('project1_content_eng')
var project_title_kor = document.getElementById('project1_title_kor')
var project_content_kor = document.getElementById('project1_content_kor')

var displaySetting_title = project_title_eng.style.display;
var displaySetting_content = project_content_eng.style.display;

btn.addEventListener('click', function handleClick() {
  const initialText = 'English';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = '한국어';
    project_title_eng.style.display = 'none';
    project_content_eng.style.display = 'none';
    project_title_kor.style.display = displaySetting_title;
    project_content_kor.style.display = displaySetting_content;
  } else {
    btn.textContent = initialText;
    project_title_eng.style.display = displaySetting_title;
    project_content_eng.style.display = displaySetting_content;
    project_title_kor.style.display = 'none';
    project_content_kor.style.display = 'none';
  }
});

window.addEventListener('DOMContentLoaded', event => {

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

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
