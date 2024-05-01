// Select DOM Items 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

// Set Initial State of Menu 
let showMenu = false;

navItem.forEach(item => {
    item.addEventListener('DOMContentLoaded', closeMenu());
});

menuBtn.addEventListener('click', toggleMenu);

document.onclick = function (e) {
    if (!menuBtn.contains(e.target) && !menuNav.contains(e.target)) {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
    }
}

function toggleMenu() {
    if (!showMenu) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    // Set Menu State 
    showMenu = true;
}

function closeMenu() {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));



    // Set Menu State 
    showMenu = false;
}

