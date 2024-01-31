// Adicione este bloco de código ao seu arquivo JavaScript
const modalEditarProjeto = document.getElementById("modal-editar-projeto");
const textoEditarProjeto = document.querySelector("#texto-visualizar-editar");
const btnSalvarEditar = document.getElementById("button-salvar-editar");
const btnCancelarEditar = document.getElementById("button-cancelar-editar");

function abrirModalEditarProjeto() {
  modalEditarProjeto.showModal();
}

function fecharModalEditarProjeto(params) {
  modalEditarProjeto.close();
}

btnCancelarEditar.addEventListener("click", fecharModalEditarProjeto);
textoEditarProjeto.addEventListener("click",abrirModalVisualizarProjeto);
