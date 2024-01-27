const modal = document.getElementById("modal")
const img = document.querySelector("#abrir-modal")


function abrirModal(params) {
    modal.showModal()
}

function fecharModal(params) {
    modal.close()
}

img.addEventListener('click',abrirModal)


