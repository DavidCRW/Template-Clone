let mobileMenuList = document.querySelector('.mobile-menu-list');
let hamburgerMenu = document.querySelector('.hamburger-menu')

let i = 0;
hamburgerMenu.addEventListener('click', () => {
    if(i == 0){
        mobileMenuList.style.display = 'flex';
        i = 1;
    }else{
        mobileMenuList.style.display = 'none';
        i = 0;
    }
})