const modalAdicionarProjeto = document.getElementById("modal-adc-img");
const botaoAdicionarProjeto = document.getElementById("botao-abrir-modal");
const botao = document.getElementById("button-cancelar");

function abrirModalAdicionarProjeto(params) {
  modalAdicionarProjeto.showModal();
}

function fecharModalAdicionarProjeto(params) {
  modalAdicionarProjeto.close();
}

botao.addEventListener("click", fecharModalAdicionarProjeto);
botaoAdicionarProjeto.addEventListener("click", abrirModalAdicionarProjeto);
