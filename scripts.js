// Add any interactive elements or animations using JavaScript here
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    // Example of a simple animation
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = 'opacity 2s';
        hero.style.opacity = 1;
    }, 100);
});
