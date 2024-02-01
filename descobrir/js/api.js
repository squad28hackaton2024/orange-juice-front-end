const containerEncontrarProjeto = document.querySelector('#container-projetos')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')
const token = sessionStorage.getItem('token')

async function consomeApiEncontrarProjeto() {
    const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/projetos', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    const resposta = await dados.json()


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
    </div>
    `
    return htmlCard
}


consomeApiEncontrarProjeto()