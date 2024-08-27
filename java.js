// Add event listener to header to change background color on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        header.style.backgroundColor = '#337ab7';
    } else {
        header.style.backgroundColor = '#34C759';
    }
});

// Add event listener to slider to rotate on mouseover
var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');
slider.addEventListener('mouseover', function() {
    slides.forEach(function(slide) {
        slide.style.transform = 'rotateX(90deg)';
    });
});
slider.addEventListener('mouseout', function() {
    slides.forEach(function(slide) {
        slide.style.transform = 'rotateX(0deg)';
    });
});