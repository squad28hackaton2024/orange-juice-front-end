const inputTitulo = document.querySelector('#titulo-projeto')
const inputTag = document.querySelector('#tag-projeto')
const inputLink = document.querySelector('#link-projeto')
const inputDescricao= document.querySelector('#descricao-projeto')
const botaoVizualizar = document.querySelector('#openModalText')

const tituloVizualizar = document.querySelector('#titulo-vizualizar')
const linkVizualizar = document.querySelector('#link-vizualizar')
const descricaoVizualizar = document.querySelector('#descricao-vizualizar')
const tagVizualizar = document.querySelector('#tag-vizualizar')
const dataVizualizar = document.querySelector('#data-vizualizar')

botaoVizualizar.addEventListener('click', () => {

    const tagValue = inputTag.value
    const transformandoTagArray = tagValue.split(',')
    const divTag = document.createElement('div')

    const dataFormatada = formataMesEDia()

    transformandoTagArray.map(tag => {
        divTag.innerHTML += tag
        divTag.classList.add('tag')
        tagVizualizar.append(divTag)
    })

    tituloVizualizar.innerHTML = inputTitulo.value
    linkVizualizar.innerHTML = inputLink.value
    descricaoVizualizar.innerHTML = inputDescricao.value
    dataVizualizar.innerHTML = dataFormatada

    limpaInput()
})

function formataMesEDia() {
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1

    const dataMes = mes < 10 ? `0${mes}` : mes
    const dataDia = dia < 10 ? `0${dia}` : dia

    return `${dataDia}/${dataMes}`
}

function limpaInput () {
    inputDescricao.value = ''
    inputTitulo.value = ''
    inputTag.value = ''
    inputLink.value = ''
}




