const link = document.getElementsByClassName('menu__link');
const menuArr = document.getElementsByClassName('menu');

for (let index = 0; index <= link.length - 1; index++) {
    const currentLink = link[index];
    if (currentLink.closest('.menu_sub')) {
        continue;
    }
    currentLink.addEventListener('click', () => {
        for (let currentIndex = 0; currentIndex <= menuArr.length - 1; currentIndex++) {
            menuArr[currentIndex].classList.remove('menu_active');
        }
        const parent = currentLink.closest('.menu__item');
        if (!parent.querySelector('.menu_sub'))  {
            return;
        }
        const menu = parent.querySelector('.menu');
        menu.classList.add('menu_active');
    })
}
