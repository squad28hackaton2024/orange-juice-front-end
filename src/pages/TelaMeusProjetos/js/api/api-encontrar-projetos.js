const containerEncontrarProjeto = document.querySelector('#container-projetos-usuario')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')
const triangulo = document.querySelector('#triangulo')
const modalExcluirOProjeto = document.querySelector("#modal-excluir-projeto")
const modalEditarOProjeto = document.querySelector("#modal-editar-projeto")
const botaoExcluirProjeto = document.querySelector("#botao-excluir")
const modalMensagemSucessoExcluirProjeto = document.querySelector("#modal-mensagem-sucesso-excluir")
const token = sessionStorage.getItem('token')

//https://orangeporfolio-fcfy.onrender.com
//http://localhost:8080

async function consomeApiEncontrarProjeto() {
    
    const dados = await fetch('http://localhost:8080/projetos/usuarios', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    const resposta = await dados.json()
    
    if(resposta.projeto.length === 0) {
        const placeholder = placeholderCardProjetos()
        containerEncontrarProjeto.innerHTML = placeholder
        return
    }
    
    resposta.projeto.forEach(pj => {
        const data = formataDataApi(pj.createdAt)
        
        const criarProjetos = secaoCardProjetos(
                pj.imagens,
                pj.usuarios.nome,
                pj.usuarios.sobrenome,
                data,
                pj.tags,
                pj.id
            )
            
        containerEncontrarProjeto.innerHTML += criarProjetos

        const dropdownEditarExcluir = document.querySelectorAll('.dropdown-editar-excluir')
        const iconeCard = document.querySelectorAll('.icone-lapis')

        iconeCard.forEach((icone) => {
           icone.addEventListener('click', () => {
            dropdownEditarExcluir.forEach(dropdown => {
                
                if(dropdown.classList.contains('esconder') && dropdown.id === icone.name) {
                    const botaoModalExcluir = document.getElementById(`abrir-modal-excluir-${dropdown.id}`)
                    const botaoModalEditar = document.getElementById(`abrir-modal-editar-${dropdown.id}`)
            
                    botaoModalExcluir.addEventListener('click', () => {
                        modalExcluirOProjeto.showModal()
                    })

                    botaoModalEditar.addEventListener('click', () => {
                        modalEditarOProjeto.showModal()
                    })

                    botaoExcluirProjeto.addEventListener('click',async () => {
                        const resposta = await consomeApiDeletarProjeto(dropdown.id)

                        if(resposta.message === "Projeto deletado com sucesso!") {
                            modalExcluirOProjeto.close()
                            modalMensagemSucessoExcluirProjeto.showModal()
                        } else {
                            alert('Erro ao deletar o projeto')
                        }
                    })

                    dropdown.classList.remove('esconder')
                    dropdown.classList.add('aperecer')
                  
                } else {
                    dropdown.classList.remove('aparecer')
                    dropdown.classList.add('esconder')
                   
                }
            })
           })
        })

    })

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

function secaoCardProjetos(imagens, nome, sobrenome, data, tags, id) {

    const htmlCard = `
        <div id="card-encontrar-projeto" class="card-encontrar-projeto">
            <img src="./assets/icon_edit.png" alt="" id="icone-abre-dropdown" name="${id}" class="icone-lapis">
            <div class="triangulo-balao esconder" id="triangulo"></div>

            <nav class="dropdown-editar-excluir esconder"  id="${id}">
                <ul>
                    <li id="abrir-modal-editar-${id}">Editar</li>
                    <li id="abrir-modal-excluir-${id}" class="botao-excluir-projeto">Excluir</li>
                </ul>
            </nav>
            
            <img src="http://localhost:8080/uploads/${imagens}" alt="" id="card-imagem" class="imagem-projeto-usuario">
            
            <div class="meus-projetos__card-info-usuario">
                <div class="container-card-info-usuario">
                    <img src="./assets/Circle.svg" alt="" >
                    <p id="card-nome-${id}">${nome} ${sobrenome}</p>
                    <p id="card-data">${data}</p>
                    </div>
                
                <div class="meus-projetos__card-info-usuario--tags">
                    <p class="tag-card-usuario">${tags}</p>
                </div>
            </div>
        </div>
    
    `
    return htmlCard
}

async function consomeApiDeletarProjeto(id) {

    const dados = await fetch(`http://localhost:8080/projetos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const resposta = dados.json()
    
    return resposta
}

consomeApiEncontrarProjeto()





