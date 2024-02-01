function carregamento(){
    // Código que abre a janela do projeto ao clicar na div
    const divprojeto = document.querySelectorAll('.projeto');


    var i;

    for(i = 0; i<divprojeto.length; i++){
        divprojeto[i].onclick = abrirpop;
    }

}

function abrirpop(ele){
    let pop = document.getElementById('pop');
    let imagempop = document.getElementById('imagempopProjeto');
    let imagemProjeto = ele.children[0];
    let imagemperfilpop = document.getElementById('imagemperfilpop');
    let imagemPerfilProjeto = ele.children[1].children[0];
    let nomeProjeto = ele.children[1].children[1];
    let nomepop = document.getElementById('nomepop');
    let telaescura = document.getElementById('telaescura');
    let descricaoProjeto = ele.children[2];
    let descricaoPop = document.getElementById('descri');
    let linkProjeto = ele.children[3];
    let linkPop = document.getElementById('linkPop');
    pop.style.display = 'block';
    imagemperfilpop.src = imagemPerfilProjeto.src;
    imagempop.src = imagemProjeto.src;
    nomepop.innerText = nomeProjeto.innerText;
    telaescura.style.display = 'block';
    descricaoPop.innerText = descricaoProjeto.innerText;
    linkPop.href = linkProjeto.href;

}

function fecharpop(){
    let pop = document.getElementById('pop');
    pop.style.display = 'none';
    let telaescura = document.getElementById('telaescura');
    telaescura.style.display = 'none';
}