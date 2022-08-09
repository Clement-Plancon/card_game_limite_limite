
const sideBar = document.querySelector('.sidebar');
const buttonSideBar = document.querySelector('.sidebar__button');
buttonSideBar.addEventListener('click', (e) =>{
    sideBar.classList.toggle('remove-sidebar');
})