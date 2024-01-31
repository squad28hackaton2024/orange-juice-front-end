const triangulo = document.querySelector('#triangulo')
const modalExcluirOProjeto = document.querySelector("#modal-excluir-projeto")
const modalEditarOProjeto = document.querySelector("#modal-editar-projeto")
const botaoExcluirProjeto = document.querySelector("#botao-excluir")
const modalMensagemSucessoExcluirProjeto = document.querySelector("#modal-mensagem-sucesso-excluir")
const token = sessionStorage.getItem('token')

//https://orangeporfolio-fcfy.onrender.com
//http://localhost:8080

async function consomeApiEncontrarProjeto() {
    // retirei /usuarios
    const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/projetos', {
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
                pj.id,
                pj.link,
                pj.descricao
            )
            
        containerEncontrarProjeto.innerHTML += criarProjetos

        

    })

}

// function placeholderCardProjetos() {
//     return `
//         <div
//         class="meus-projetos__card--ativado meus-projetos__card"
//         >
//         <img src="./assets/collections.svg" alt="ícone arquivo" />
        
//         <p>Adicione seu primeiro projeto</p>
        
//         <p>Compartilhe seu talento com milhares de pessoas</p>
//         </div>
    
//     `
// }

function formataDataApi(dataBancoDeDados) {
    const data = new Date(dataBancoDeDados)
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    
    const formatandoMes = mes < 10 ? `0${mes}` : mes
    const formatandoAno = ano.toString().substring(2,5)
    
    return `${formatandoMes}/${formatandoAno}`
}

function secaoCardProjetos(imagens, nome, sobrenome, data, tags, id, link, descricao) {
    // src="https://orangeporfolio-fcfy.onrender.com/uploads/${imagens}"
    const htmlCard = `
    <div class="projeto">
        <img src="https://orangeporfolio-fcfy.onrender.com/uploads/${imagens}" alt="">
        <div class="rodapeProjeto">
            <img src="assets/perfil.png" alt="">
            <p>${nome}</p>
        </div>
    </div>
    `
    return htmlCard
}

async function consomeApiDeletarProjeto(id) {

    const dados = await fetch(`https://orangeporfolio-fcfy.onrender.com/projetos/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const resposta = dados.json()
    
    return resposta
}

consomeApiEncontrarProjeto()