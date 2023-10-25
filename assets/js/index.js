const menu_btn = document.querySelector(".menu_btn")
const menu_contianer = document.querySelector('.menu_contianer')

const close_menu = document.querySelector(".close")

menu_btn.addEventListener("click",() => {
    menu_contianer.classList.add("open_menu")
})

close_menu.addEventListener('click',() => {
    menu_contianer.classList.remove("open_menu")
})