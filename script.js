/*=================== toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x'); // Use the correct class for the icon toggle
    navbar.classList.toggle('active');
};
/*=================== toggle icon navbar =================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // This will ensure that when the page is scrolled, the menu closes automatically
    menuIcon.classList.remove('fa-x'); // Reset the menu icon
    navbar.classList.remove('active');
};

/*=================== scrollreveal =================*/

ScrollReveal({
    distance: '450px',
    duration: 3000,
    delay: 300,
});



ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.service-container', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' });
// ScrollReveal().reveal('.skill', { origin: 'right' });
ScrollReveal().reveal('.skill', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.project', { origin: 'right' });
ScrollReveal().reveal('.contact form', { origin: 'right' });
// Additional specific reveals
ScrollReveal().reveal('.home-content h1', { origin: 'right' });
ScrollReveal().reveal('.home-content p', { origin: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
  });


