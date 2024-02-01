const inputTitulo = document.querySelector('#titulo-projeto')
const inputTag = document.querySelector('#tag-projeto')
const inputLink = document.querySelector('#link-projeto')
const inputDescricao= document.querySelector('#descricao-projeto')
const botaoVisualizar = document.querySelector('#openModalText')

const tituloVisualizar = document.querySelector('#titulo-vizualizar')
const linkVisualizar = document.querySelector('#link-vizualizar')
const descricaoVisualizar = document.querySelector('#descricao-vizualizar')
const tagVisualizar = document.querySelector('#tag-vizualizar')
const dataVisualizar = document.querySelector('#data-vizualizar')

botaoVisualizar.addEventListener('click', () => {

    const tagValue = inputTag.value
    const transformandoTagArray = tagValue.split(',')
    const divTag = document.createElement('div')

    const dataFormatada = formataMesEDia()

    transformandoTagArray.map(tag => {
        divTag.innerHTML += tag
        divTag.classList.add('tag')
        tagVisualizar.append(divTag)
    })

    tituloVisualizar.innerHTML = inputTitulo.value
    linkVisualizar.innerHTML = inputLink.value
    descricaoVisualizar.innerHTML = inputDescricao.value
    dataVisualizar.innerHTML = dataFormatada

})

function formataMesEDia() {
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1

    const dataMes = mes < 10 ? `0${mes}` : mes
    const dataDia = dia < 10 ? `0${dia}` : dia

    return `${dataDia}/${dataMes}`
}



