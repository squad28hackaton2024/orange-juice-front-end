const botaoCancelarModalExcluir = document.querySelector("#botao-cancelar-modal-excluir")
const modalCancelar = document.querySelector("#modal-excluir-projeto")

function fecharModalExcluir() {
    modalCancelar.close()
}

botaoCancelarModalExcluir.addEventListener('click', fecharModalExcluir)