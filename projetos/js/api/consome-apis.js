const containerEncontrarProjeto = document.querySelector('#container-projetos-usuario')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')
const inputEnviaTags = document.querySelector('#input-tags')

const modalExcluirOProjeto = document.querySelector("#modal-excluir-projeto")
const botaoModalExcluirProjeto = document.querySelector("#botao-excluir")
const modalMensagemSucessoExcluirProjeto = document.querySelector("#modal-mensagem-sucesso-excluir")

const formularioEditarProjeto = document.querySelector('#formulario-editar')
const tituloEditarProjeto = document.querySelector('#titulo-projeto-editar')
const linkEditarProjeto = document.querySelector('#link-projeto-editar')
const descricaoEditarProjeto = document.querySelector('#descricao-projeto-editar')
const tagEditarProjeto = document.querySelector('#tag-projeto-editar')
const botaoEditarProjeto = document.querySelector('#button-editar-projeto')
const modalMensagemSucessoEditarProjeto = document.querySelector('#modal-mensagem-sucesso-editar')
const modalEditarOProjeto = document.querySelector("#modal-editar-projeto")

const token = sessionStorage.getItem('token')

async function renderizaSecoesCardsUsuarios() {

    if(inputEnviaTags.value.length === 0) {
        renderizaTodasAsApisUsuario()
    } 

    renderizaTodasAsTagsUsuario()
    
}

async function renderizaTodasAsApisUsuario() {
    projetosUsuarios = await consomeApiEncontrarProjetosUsuarios()

    projetosUsuarios.projeto.forEach(pj => {
    
        const data = formataDataApi(pj.createdAt)
            
        criaSecaoCardProjetos(
            pj.imagens,
            pj.usuarios.nome,
            pj.usuarios.sobrenome,
            data,
            pj.tags,
            pj.id
        )
    
        const dropdownEditarExcluir = document.querySelectorAll('.dropdown-editar-excluir')
        const iconeCard = document.querySelectorAll('.icone-lapis')
    
        iconeCard.forEach((icone) => {
            icone.addEventListener('click', () => {
                dropdownEditarExcluir.forEach(dropdown => {
    
                if(dropdown.classList.contains('esconder') && dropdown.id === icone.name) {
                    apareceDropdown(dropdown)
    
                    const botaoDropdownExcluir = document.getElementById(`abrir-modal-excluir-${dropdown.id}`)
                    const botaoDropdownEditar = document.getElementById(`abrir-modal-editar-${dropdown.id}`)
                
                    botaoDropdownExcluir.addEventListener('click', apareceModalExcluirProjeto)
    
                    botaoDropdownEditar.addEventListener('click', apareceModalEditarProjeto)
    
                    botaoModalExcluirProjeto.addEventListener('click',async () => {
                            await consomeApiDeletarProjeto(dropdown.id)
                    })
                        
                    formularioEditar(
                        pj.titulo,
                        pj.descricao,
                        pj.link,
                        pj.tags,
                        dropdown.id
                    )
    
                    return
                } 
                
                desapareceDropdown(dropdown)
                       
                })
            })
        })
    })
}

let timer = null
function debounce(callback, value) {

    clearTimeout(timer)

    timer = setTimeout(async () => {

        const resposta = await consomeApiEncontrarProjetosUsuarios(value)
        return callback(resposta)
    }, 300)
}

async function renderizaTodasAsTagsUsuario() {
    inputEnviaTags.addEventListener('input', async (event) => {
        const busca = encodeURIComponent(event.target.value.toLowerCase());
        const queryString = `?tag=${busca}&tag=`;

        
        debounce((projetosUsuarios) => {
            if(queryString.length < 11) {
                containerEncontrarProjeto.innerHTML = ""
                renderizaTodasAsApisUsuario()
                return
            }
            
    
            containerEncontrarProjeto.innerHTML = ""
    
            projetosUsuarios.projeto.forEach(pj => {
        
                const data = formataDataApi(pj.createdAt)
                
                criaSecaoCardProjetos(
                    pj.imagens,
                    pj.usuarios.nome,
                    pj.usuarios.sobrenome,
                    data,
                    pj.tags,
                    pj.id
                )
        
                const dropdownEditarExcluir = document.querySelectorAll('.dropdown-editar-excluir')
                const iconeCard = document.querySelectorAll('.icone-lapis')
        
                iconeCard.forEach((icone) => {
                    icone.addEventListener('click', () => {
                        dropdownEditarExcluir.forEach(dropdown => {
        
                            if(dropdown.classList.contains('esconder') && dropdown.id === icone.name) {
                            apareceDropdown(dropdown)
        
                            const botaoDropdownExcluir = document.getElementById(`abrir-modal-excluir-${dropdown.id}`)
                            const botaoDropdownEditar = document.getElementById(`abrir-modal-editar-${dropdown.id}`)
                    
                            botaoDropdownExcluir.addEventListener('click', apareceModalExcluirProjeto)
        
                            botaoDropdownEditar.addEventListener('click', apareceModalEditarProjeto)
        
                            botaoModalExcluirProjeto.addEventListener('click',async () => {
                                await consomeApiDeletarProjeto(dropdown.id)
                            })
        
                           formularioEditar(
                                pj.titulo,
                                pj.descricao,
                                pj.link,
                                pj.tags,
                                dropdown.id
                           )
        
                            return
                        } 
                        desapareceDropdown(dropdown)
                           
                    })
                   })
                })
            })
        }, queryString)
        
    })
        
    
}

async function consomeApiEncontrarProjetosUsuarios(query) {
    const param = query == undefined ? "" : query

    const dados = await fetch(`http://localhost:8080/projetos/usuarios${param}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
    
    const resposta = await dados.json()
    
    if(resposta.projeto.length === 0 && query == undefined) {
        const placeholder = placeholderCardProjetos()
        containerEncontrarProjeto.innerHTML = placeholder
        return
    }
    
    return resposta
    
   
}

async function consomeApiDeletarProjeto(id) {
    botaoModalExcluirProjeto.disabled = true
    
    const dados = await fetch(`http://localhost:8080/projetos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    const resposta = await dados.json()
    
    if(resposta.message === "Projeto deletado com sucesso!") {
        botaoModalExcluirProjeto.disabled = false
        apareceModalMensagemExcluirComSucesso()
        return
    } else {
        botaoModalExcluirProjeto.disabled = false
        alert("Erro ao deletar projeto")
    }
}

async function consomeApiEditarProjeto(titulo, descricao, tags, link, id) {
    
    
    const dadosProjetosEditar = {
        titulo: titulo,
        descricao: descricao,
        tags: tags,
        link: link,
    }
    
    const dados = await fetch(`http://localhost:8080/projetos/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dadosProjetosEditar)
    })
    
    const resposta = await dados.json()
 
    return resposta
     
}

async function consomeApiEditarImagemProjeto(evento, id) {
    
    let formData = new FormData()
    if(evento.target[0].files[0] != undefined) {
        formData.append('imagens', evento.target[0].files[0])
    }

    const dados = await fetch(`http://localhost:8080/projetos/${id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    })

    const resposta = await dados.json()

    return resposta
}

function formularioEditar(titulo, descricao, link, tags, id) {
    formularioEditarProjeto.addEventListener('submit',async (e) => {
        botaoEditarProjeto.disabled = true
        e.preventDefault()
        
        const regex = /[\W\s]+/g;

        const tag = tagEditarProjeto.value.replace(regex, ',');
        const tagsEmMinusculo = tag.toLowerCase().split(" ")
        const tituloEditar = tituloEditarProjeto.value == "" ? titulo : tituloEditarProjeto.value
        const descricaoEditar = descricaoEditarProjeto.value == "" ? descricao : descricaoEditarProjeto.value
        const linkEditar = linkEditarProjeto.value == "" ? link : linkEditarProjeto.value
        const tagEditar = tagEditarProjeto.value == "" ? tags : tagsEmMinusculo

        const editarCamposProjetos = await consomeApiEditarProjeto(
            tituloEditar,
            descricaoEditar,
            tagEditar,
            linkEditar,
            id
        )
        
        const editarImagemProjetos = await consomeApiEditarImagemProjeto(e, id)

        if(editarCamposProjetos.message === 'Edição concluída com sucesso' || editarImagemProjetos.message === 'Edição concluída com sucesso') {
            botaoEditarProjeto.disabled = false 
            apareceModalMensagemEditadoComSucesso()
            return
        }

        alert('Erro ao editar projeto')
    })
}

function criaSecaoCardProjetos(imagens, nome, sobrenome, data, tags, id) {

    const htmlCard = `
        <div id="card-encontrar-projeto" class="meus-projetos__card--ativado">
            <img src="./assets/icon_edit.png" alt="" id="icone-abre-dropdown" name="${id}" class="icone-lapis">
            <div class="triangulo-balao esconder" id="triangulo"></div>

            <nav class="dropdown-editar-excluir esconder"  id="${id}">
                <ul>
                    <li class="li-hover" id="abrir-modal-editar-${id}">Editar</li>
                    <li class="li-hover" id="abrir-modal-excluir-${id}" class="botao-excluir-projeto">Excluir</li>
                </ul>
            </nav>
            
            <img src="http://localhost:8080/uploads/${imagens}" alt="" id="card-imagem" class="imagem-projeto-usuario">
            
            <div class="meus-projetos__card-info-usuario">
                <div class="container-card-info-usuario">
                    <img src="./assets/Circle.svg" alt="" >
                    <p id="card-nome-${id}" class="card-nome-usuario">${nome} ${sobrenome}</p>
                    <p id="card-data">${data}</p>
                    </div>
                
                <div class="meus-projetos__card-info-usuario--tags">
                    <p class="tag-card-usuario">${tags}</p>
                </div>
            </div>
        </div>
    
    `
    containerEncontrarProjeto.innerHTML += htmlCard
}

function placeholderCardProjetos() {
    return `
        <div
        class="meus-projetos__card--ativado meus-projetos__card"
        >
        <img src="./assets/collections.svg" alt="ícone arquivo" />
        
        <p>Adicione seu primeiro projeto</p>
        
        <p>Compartilhe seu talento com milhares de pessoas</p>
        </div>
    
    `
}

function formataDataApi(dataBancoDeDados) {
    const data = new Date(dataBancoDeDados)
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    
    const formatandoMes = mes < 10 ? `0${mes}` : mes
    const formatandoAno = ano.toString().substring(2,5)
    
    return `${formatandoMes}/${formatandoAno}`
}

function apareceModalExcluirProjeto() {
    modalExcluirOProjeto.showModal()
}

function apareceModalEditarProjeto() {
    modalEditarOProjeto.showModal()
}

function apareceModalMensagemExcluirComSucesso() {
    modalExcluirOProjeto.close()
    modalMensagemSucessoExcluirProjeto.showModal()
}

function apareceModalMensagemEditadoComSucesso() {
    modalEditarOProjeto.close()
    modalMensagemSucessoEditarProjeto.showModal()
}

function apareceDropdown(dropdown) {
    dropdown.classList.remove('esconder')
    dropdown.classList.add('aperecer')
}

function desapareceDropdown(dropdown) {
    dropdown.classList.remove('aparecer')
    dropdown.classList.add('esconder')
}

renderizaSecoesCardsUsuarios()
