let dubaitext = document.getElementById('dubaitext');
let stars = document.getElementById('stars');
let burjkhalifa = document.getElementById('burjkhalifa');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaitext.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 0.8 + 'px';
    stars.style.top = value * 0.8 + 'px';
});