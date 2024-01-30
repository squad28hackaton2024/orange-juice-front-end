const dropdownEditarExcluir = document.querySelector('#dropdown-editar-excluir')
const triangulo = document.querySelector('#triangulo')
const iconeLapisDropdown = document.getElementsByClassName('icone-lapis')[0]


iconeLapisDropdown.addEventListener('click', () => {

        if(triangulo.classList.contains('esconder') && dropdownEditarExcluir.classList.contains('esconder')) {
            dropdownEditarExcluir.classList.remove('esconder')
            triangulo.classList.remove('esconder')
            dropdownEditarExcluir.classList.add('aperecer')
            triangulo.classList.add('aparecer')
        } else {
            dropdownEditarExcluir.classList.remove('aparecer')
            triangulo.classList.remove('aparecer')
            dropdownEditarExcluir.classList.add('esconder')
            triangulo.classList.add('esconder')
        }
})


