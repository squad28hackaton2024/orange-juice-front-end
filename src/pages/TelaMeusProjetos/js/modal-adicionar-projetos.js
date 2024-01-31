const modalAdicionarProjeto = document.getElementById("modal-adc-img");
const botaoAdicionarProjeto = document.getElementById("botao-abrir-modal");
const botaoCancelar = document.getElementById("button-cancelar");

function abrirModalAdicionarProjeto(params) {
  modalAdicionarProjeto.showModal();
}

function fecharModalAdicionarProjeto(params) {
  modalAdicionarProjeto.close();
}


botaoAdicionarProjeto.addEventListener("click", abrirModalAdicionarProjeto);
botaoCancelar.addEventListener("click", fecharModalAdicionarProjeto);
