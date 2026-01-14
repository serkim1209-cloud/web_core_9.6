const burger = document.querySelector('.burger');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuBackground = document.querySelector('.side-menu-bagraund');

    burger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        sideMenuBackground.classList.toggle('active');
    });
const burger1 = document.querySelector('.burger-1');
    const contentment = document.querySelector('.content');
   

    burger1.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        sideMenuBackground.classList.toggle('active');
    });


