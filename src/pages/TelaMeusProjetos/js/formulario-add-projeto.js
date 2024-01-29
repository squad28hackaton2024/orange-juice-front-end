const inputTitulo = document.querySelector('#titulo-projeto')
const inputTag = document.querySelector('#tag-projeto')
const inputLink = document.querySelector('#link-projeto')
const inputDescricao= document.querySelector('#descricao-projeto')
const botaoVizualizar = document.querySelector('#openModalText')

const tituloVizualizar = document.querySelector('#titulo-vizualizar')
const linkVizualizar = document.querySelector('#link-vizualizar')
const descricaoVizualizar = document.querySelector('#descricao-vizualizar')

botaoVizualizar.addEventListener('click', () => {

    tituloVizualizar.innerHTML = inputTitulo.value
    linkVizualizar.innerHTML = inputLink.value
    descricaoVizualizar.innerHTML = inputDescricao.value

    
})





