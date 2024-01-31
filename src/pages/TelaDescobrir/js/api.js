const containerEncontrarProjeto = document.querySelector('#container-projetos')
const cardImagem = document.querySelector('#card-imagem')
const cardNome = document.querySelector('#card-nome')
const cardData = document.querySelector('#card-data')
const token = sessionStorage.getItem('token')


async function consomeApiEncontrarProjeto() {
    // retirei /usuarios
    const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/projetos', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    const resposta = await dados.json()
    console.log(resposta)


    resposta.projetos.forEach(pj => {
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
            console.log(pj)
            
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


function secaoCardProjetos(imagens, nome, sobrenome, data, tags, id, link, descricao) {
    const htmlCard = `
    <div class="projeto" onclick="abrirpop(this)">
        <img src="https://orangeporfolio-fcfy.onrender.com/uploads/${imagens}" alt="">
        <div class="rodapeProjeto">
            <img src="assets/perfil.png" alt="">
            <p>${nome}</p>
        </div>
    </div>
    `
    return htmlCard
}


consomeApiEncontrarProjeto()