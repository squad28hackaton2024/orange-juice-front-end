const modal = document.getElementById("modal-adc-img")
const img = document.querySelector("#abrir-modal")

const botao = document.getElementById("button-cancelar")
function abrirModal(params) {
    modal.showModal()
}

function fecharModal(params) {
    modal.close()
}

img.addEventListener('click',abrirModal)


botao.addEventListener('click',fecharModal)