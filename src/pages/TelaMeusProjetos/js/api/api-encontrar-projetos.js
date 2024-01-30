const containerEncontrarProjeto = document.querySelector('#container-projetos-usuario')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')

async function consomeApiEncontrarProjeto() {
    const token = sessionStorage.getItem('token')

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
    
    resposta.projeto.map(pj => {
        const data = formataDataApi(pj.createdAt)

        const criarProjetos = secaoCardProjetos(
            pj.imagens,
            pj.usuarios.nome,
            pj.usuarios.sobrenome,
            data,
            pj.tags
        )

        containerEncontrarProjeto.innerHTML += criarProjetos
    })

    return resposta
}


function formataDataApi(dataAtual) {
    const data = new Date(dataAtual)
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const formatandoMes = mes < 10 ? `0${mes}` : mes
    const formatandoAno = ano.toString().substring(2,5)

    return `${formatandoMes}/${formatandoAno}`
}

function secaoCardProjetos(imagens, nome, sobrenome, data, tags) {
    return `
    <div id="card-encontrar-projeto" class="card-encontrar-projeto">
        <img src="./assets/mode.svg" alt="" id="icone-lapis" class="icone-lapis">
        <div class="triangulo-balao esconder" id="triangulo"></div>
        <nav class="dropdown-editar-excluir esconder" id="dropdown-editar-excluir">
            <ul>
                <li id="abrir-modal-editar">Editar</li>
                <li id="abrir-modal-excluir">Excluir</li>
            </ul>
        </nav>

        <img src="http://localhost:8080/uploads/${imagens}" alt="" id="card-imagem" class="imagem-projeto-usuario">

        <div class="meus-projetos__card-info-usuario">
            <div class="container-card-info-usuario">
                <img src="./assets/Circle.svg" alt="" >
                <p id="card-nome">${nome} ${sobrenome}</p>
                <p id="card-data">${data}</p>
            </div>

            <div class="meus-projetos__card-info-usuario--tags">
            <p class="tag-card-usuario">${tags}</p>
            </div>
        </div>
    </div>
    
    `
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

consomeApiEncontrarProjeto()