const titulo = document.querySelector('#titulo-projeto')
const descricao = document.querySelector('#descricao-projeto')
const tags = document.querySelector('#tag-projeto')
const link = document.querySelector('#link-projeto')
const formulario = document.querySelector('#formulario-projeto')
const botaoSalvarAdicionarProjeto = document.querySelector('#botao-salvar-adicionar-projeto')

const modalMensagemSucesso = document.querySelector('#modal-mensagem-sucesso')
const modalAddProjeto = document.querySelector('#modal-adc-img')


formulario.addEventListener('submit', (e) => {
    botaoSalvarAdicionarProjeto.disabled = true

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

    fetch('http://localhost:8080/projetos', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
    .then(res => res.json())
    .then(dados => {
        if(dados.message == 'Projeto adicionado com sucesso! ') {
            botaoSalvarAdicionarProjeto.disabled = false
            fecharEAbrirModal()   
        }
    })
    .catch((e) => console.error(e))
    
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