const titulo = document.querySelector('#titulo-projeto')
const descricao = document.querySelector('#descricao-projeto')
const tags = document.querySelector('#tag-projeto')
const link = document.querySelector('#link-projeto')
const formulario = document.querySelector('#formulario-projeto')

const modalMensagemSucesso = document.querySelector('#modal-mensagem-sucesso')
const modalAddProjeto = document.querySelector('#modal-adc-img')

//https://orangeporfolio-fcfy.onrender.com
//http://localhost:8080


formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    const regex = /[\W\s]+/g;

    const tag = tags.value.replace(regex, ',');
    const tagsEmMinusculo = tag.toLowerCase()

    const token = sessionStorage.getItem('token')
    const formData = new FormData()
    formData.append('imagens', e.target[0].files[0])
    formData.append('titulo', titulo.value)
    formData.append('descricao', descricao.value)
    formData.append('tags', tagsEmMinusculo)
    formData.append('link', link.value)

    fetch('https://orangeporfolio-fcfy.onrender.com/projetos', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
    .then(res => res.json())
    .then(dados => {
        fecharEAbrirModal()   
    })
    .catch((e) => console.log(e))

})

function abrirModalMensagemSucesso() {
    modalMensagemSucesso.showModal()
}

function fecharAdicionarProjeto() {
    modalAddProjeto.close()
}

function fecharEAbrirModal() {
    fecharAdicionarProjeto()
    abrirModalMensagemSucesso()
}