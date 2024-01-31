$('#slider').nivoSlider();


function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('openMenu')) {
        menuMobile.classList.remove('openMenu');
        document.querySelector('.icon').src = 'assets/menu-mobile.png';
    } else {
        menuMobile.classList.add('openMenu');
        document.querySelector('.icon').src = 'assets/close-menu--mobile.png';s
    }
};


function showSubMenu() {
    let menuMobile = document.querySelector('.subMobile');
    if(menuMobile.classList.contains('openMenu')) {
        menuMobile.classList.remove('openMenu');
        document.querySelector('.icon').src = 'assets/menu-mobile.png';
    } else {
        menuMobile.classList.add('openMenu');
        document.querySelector('.icon').src = 'assets/close-menu--mobile.png';s
    }
};

function showSubMenu() {
    let menuMobile = document.querySelector('.subMobile');
    if(menuMobile.classList.contains('openMenu')) {
        menuMobile.classList.remove('openMenu');
    } else {
        menuMobile.classList.add('openMenu');
    }
};

function showSubMenu2() {
    let menuMobile = document.querySelector('.subMobile2');
    if(menuMobile.classList.contains('openMenu')) {
        menuMobile.classList.remove('openMenu');
    } else {
        menuMobile.classList.add('openMenu');
    }
};



