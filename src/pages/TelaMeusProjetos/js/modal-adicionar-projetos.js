const modalAdicionarProjeto = document.getElementById("modal-adc-img");
const botaoAdicionarProjeto = document.getElementById("botao-abrir-modal");
const botaoCancelar = document.getElementById("button-cancelar");
const botaoSalvar = document.getElementById("button-salvar");
function abrirModalAdicionarProjeto(params) {
  modalAdicionarProjeto.showModal();
}

function fecharModalAdicionarProjeto(params) {
  modalAdicionarProjeto.close();
}
botaoSalvar.addEventListener("click", fecharModalAdicionarProjeto);

function teste(params) {
  modalAdicionarProjeto.close();

}


img.addEventListener("click", abrirModalAdicionarProjeto);
botaoCancelar.addEventListener("click", fecharModalAdicionarProjeto);
botaoAdicionarProjeto.addEventListener("click", abrirModalAdicionarProjeto);