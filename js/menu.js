const menu = document.querySelector('i');
const slide = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    slide.classList.toggle('slide');
});

menu.addEventListener('click', function() {
    if (menu.classList.contains('fa-bars')) {
        menu.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menu.classList.replace('fa-xmark', 'fa-bars');
    }
});