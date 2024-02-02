// Adicione este bloco de código ao seu arquivo JavaScript
const modalEditarProjeto = document.getElementById("modal-editar-projeto");
const btnSalvarEditar = document.getElementById("button-salvar-editar");
const btnCancelarEditar = document.getElementById("button-cancelar-editar");
const textoEditarProjeto = document.querySelector("#texto-visualizar-editar");

const inputTituloEditar = document.querySelector('#titulo-projeto-editar')
const inputTagEditar = document.querySelector('#tag-projeto-editar')
const inputLinkEditar = document.querySelector('#link-projeto-editar')
const inputDescricaoEditar = document.querySelector('#descricao-projeto-editar')
const iconeCloseEditar = document.querySelector('#icone-close')


function abrirModalEditarProjeto() {
  modalEditarProjeto.showModal();
}

function fecharModalEditarProjeto(params) {
  modalEditarProjeto.close();
}

textoEditarProjeto.addEventListener('click', () => {

  const tagValue = inputTagEditar.value
  const transformandoTagArray = tagValue.split(',')
  const divTag = document.createElement('div')

  const dataFormatada = formataMesEDiaEditar()

  transformandoTagArray.map(tag => {
      divTag.innerHTML = tag
      divTag.classList.add('tag')
      tagVisualizar.append(divTag)
  })

  tituloVisualizar.innerHTML = inputTituloEditar.value
  linkVisualizar.innerHTML = inputLinkEditar.value
  descricaoVisualizar.innerHTML = inputDescricaoEditar.value
  dataVisualizar.innerHTML = dataFormatada

})

function formataMesEDiaEditar() {
  const data = new Date()
  const dia = data.getDate()
  const mes = data.getMonth() + 1

  const dataMes = mes < 10 ? `0${mes}` : mes
  const dataDia = dia < 10 ? `0${dia}` : dia

  return `${dataDia}/${dataMes}`
}

iconeCloseEditar.addEventListener('click', () => {
  tagVisualizar.innerHTML = ""
 
  fecharModalEditarProjeto()
});


btnCancelarEditar.addEventListener("click", fecharModalEditarProjeto);
textoEditarProjeto.addEventListener("click",abrirModalVisualizarProjeto);
