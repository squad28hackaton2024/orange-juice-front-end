const menuHamburguer = document.querySelector('#menu-hamburguer')
const dropdown = document.querySelector('#dropdown')

menuHamburguer.addEventListener('click', () => {

    if(dropdown.classList.contains('esconder')) {
        dropdown.classList.remove('esconder')
        dropdown.classList.add('aparecer')
    } else {
        dropdown.classList.remove('aparecer')
        dropdown.classList.add('esconder')
    }
})


