let text = document.getElementById('text');

let cloud1 = document.getElementById('cloud1');
let mountain1 = document.getElementById('mountain1');
let forest1 = document.getElementById('forest1');
let castle1 = document.getElementById('castle1');
let forest2 = document.getElementById('forest2');
let ship1 = document.getElementById('ship1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';

    castle1.style.top = value * 0.5 + 'px';
    cloud1.style.left = value * 1.5 + 'px';
    forest1.style.top = value * 0.2 + 'px';
    ship1.style.left = value * 0.7 + 'px';
    // hill1.style.top = value * 0.8 + 'px';
});