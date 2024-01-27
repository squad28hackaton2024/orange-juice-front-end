const modal = document.getElementById("modal-visualizar-projeto")
const texto = document.querySelector("#text")


function abrirModal(params) {
    modal.showModal()
}

function fecharModal(params) {
    modal.close()
}

texto.addEventListener('click',abrirModal)


