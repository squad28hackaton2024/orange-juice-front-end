const containerEncontrarProjeto = document.querySelector('#container-projetos')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')
const inputTagsDescobrir = document.querySelector('#buscar-tags-descobrir')

const token = sessionStorage.getItem('token')

async function renderizaSecoesCardDescobrir() {
    
    if(inputTagsDescobrir.value.length === 0) {
        renderizaTodosCards()
    }

    renderizaTodosCardsPorTags()

}

async function renderizaTodosCards() {
    resposta = await consomeApiEncontrarTodosProjetos()

    resposta.projetos.forEach(pj => {
        let data

        if(pj.updatedAt != null){
            data = formataDataApi(pj.updatedAt)
        }
        else{
            data = formataDataApi(pj.createdAt)
        }
        
        const criarProjetos = secaoCardProjetos(
                pj.imagens,
                pj.usuarios.nome,
                pj.usuarios.sobrenome,
                data,
                pj.tags,
                pj.id,
                pj.link,
                pj.descricao,
                pj.titulo
            )
            
        containerEncontrarProjeto.innerHTML += criarProjetos

    })
}

let timer = null
function debounce(callback, value) {

    clearTimeout(timer)

    timer = setTimeout(async () => {

        const resposta = await consomeApiEncontrarTodosProjetos(value)
        return callback(resposta)
    }, 300)
}


async function renderizaTodosCardsPorTags() {
   inputTagsDescobrir.addEventListener('input', async (event) => {
    const busca = encodeURIComponent(event.target.value.toLowerCase());
    const queryString = `?tag=${busca}&tag=`;

    debounce((todosProjetos) => {
    
        if(queryString.length < 11) {
            containerEncontrarProjeto.innerHTML = ""
            renderizaTodosCards()
            return
        }
    
        containerEncontrarProjeto.innerHTML = ""
    
        todosProjetos.projetos.forEach(pj => {
            let data
    
            if(pj.updatedAt != null){
                data = formataDataApi(pj.updatedAt)
            }
            else{
                data = formataDataApi(pj.createdAt)
            }
            
            const criarProjetos = secaoCardProjetos(
                    pj.imagens,
                    pj.usuarios.nome,
                    pj.usuarios.sobrenome,
                    data,
                    pj.tags,
                    pj.id,
                    pj.link,
                    pj.descricao,
                    pj.titulo
                )
                
            containerEncontrarProjeto.innerHTML += criarProjetos
    
        })
    }, queryString)

   })
}

async function consomeApiEncontrarTodosProjetos(query) {
    const param = query == undefined ? "" : query

    const dados = await fetch(`https://orangeporfolio-fcfy.onrender.com/projetos${param}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    const resposta = await dados.json()

    return resposta
}

function formataDataApi(dataBancoDeDados) {
    const data = new Date(dataBancoDeDados)
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    
    const formatandoMes = mes < 10 ? `0${mes}` : mes
    const formatandoAno = ano.toString().substring(2,5)
    
    return `${formatandoMes}/${formatandoAno}`
}

function secaoCardProjetos(imagens, nome, sobrenome, data, tags, id, link, descricao, titulo) {
    const htmlCard = `
    <div class="projeto" onclick="abrirpop(this)">
        <img src="https://orangeporfolio-fcfy.onrender.com/uploads/${imagens}" alt="">
        <div class="rodapeProjeto">
            <img src="assets/perfil.png" alt="">
            <p class="nome-descobrir">${nome} ${sobrenome}</p>
            <p>${data}</p>
        </div>
        <p style="display: none;">${descricao}</p>
        <a href="${link}" style="display: none;">link</a>
        <p style="display: none;">${titulo}</p>
        <p style="display: none;">${tags}</p>
    </div>
    `
    return htmlCard
}


renderizaSecoesCardDescobrir()