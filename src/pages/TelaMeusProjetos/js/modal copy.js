const modal = document.getElementById("modal-adc-img")
const img = document.querySelector("#abrir-modal")


function abrirModal(params) {
    modal.showModal()
}

function fecharModal(params) {
    modal.close()
}

img.addEventListener('click',abrirModal)


