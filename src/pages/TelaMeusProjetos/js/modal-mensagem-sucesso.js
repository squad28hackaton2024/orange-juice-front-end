const modalMensagemSucesso = document.querySelector('#modal-mensagem-sucesso')
const modalAddProjeto = document.querySelector('#modal-adc-img')
const botaoSalvarMensagemSucesso = document.querySelector('#salvar-projeto')
console.log(botaoSalvarMensagemSucesso)

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

botaoSalvarMensagemSucesso.addEventListener('click', fecharEAbrirModal)

