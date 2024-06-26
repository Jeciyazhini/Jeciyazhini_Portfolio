document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Card flip animation on hover
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
        });
    });
});
