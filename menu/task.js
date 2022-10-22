const link = document.getElementsByClassName('menu__link');
const menuArr = document.getElementsByClassName('menu');


for (let index = 0; index < link.length; index++) {
    const currentLink = link[index];

    if (currentLink.closest('.menu_sub')) {
        continue;
    }

    currentLink.addEventListener('click', (event) => {
        const parent = currentLink.closest('.menu__item');
        const menu = parent.querySelector('.menu');
        menu.classList.toggle('menu_active');
        event.preventDefault();
    })
}
