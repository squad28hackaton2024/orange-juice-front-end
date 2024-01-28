const modalAdicionarProjeto = document.getElementById("modal-adc-img");
const img = document.querySelector("#abrir-modal");
const botaoAdicionarProjeto = document.getElementById("botao-abrir-modal");
const botao = document.getElementById("button-cancelar");

function abrirModalAdicionarProjeto(params) {
  modalAdicionarProjeto.showModal();
}

function fecharModalAdicionarProjeto(params) {
  modalAdicionarProjeto.close();
}

img.addEventListener("click", abrirModalAdicionarProjeto);

botao.addEventListener("click", fecharModalAdicionarProjeto);
botaoAdicionarProjeto.addEventListener("click", abrirModalAdicionarProjeto);
