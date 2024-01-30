const modalAdicionarProjeto = document.getElementById("modal-adc-img");
const botaoAdicionarProjeto = document.getElementById("botao-abrir-modal");
const botaoCancelar = document.getElementById("button-cancelar");

function abrirModalAdicionarProjeto(params) {
  modalAdicionarProjeto.showModal();
}

function fecharModalAdicionarProjeto(params) {
  modalAdicionarProjeto.close();
}

botaoCancelar.addEventListener("click", fecharModalAdicionarProjeto);


botaoAdicionarProjeto.addEventListener("click", abrirModalAdicionarProjeto);
