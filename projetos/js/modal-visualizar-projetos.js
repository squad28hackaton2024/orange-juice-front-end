// Adicione este bloco de código ao seu arquivo JavaScript
const modalVisualizarProjeto = document.getElementById("modal-ver-img");
const textoVisualizarProjeto = document.querySelector("#openModalText");

function abrirModalVisualizarProjeto() {
  modalVisualizarProjeto.showModal();
}

function fecharModalVisualizarProjeto(params) {
  modalVisualizarProjeto.close();
}

textoVisualizarProjeto.addEventListener("click", abrirModalVisualizarProjeto);
