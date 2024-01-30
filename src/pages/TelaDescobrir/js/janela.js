// Código que abre a janela do projeto ao clicar na div
        const pegadiv = document.querySelectorAll('.projeto');
        console.log(pegadiv);

        var i;

        for(i = 0; i<pegadiv.length; i++){
            pegadiv[i].onclick = abrirpop;
        }

        function abrirpop(){
            let pop = document.getElementById('pop');
            let imagempop = document.getElementById('imagempop');
            let imagembloco = this.children[0];
            let nome = this.children[1];
            pop.style.display = 'block';
            imagempop.src = imagembloco.src;
            pop.children[1].innerText = this.children[1].innerText;

        }

        function fecharpop(){
            let pop = document.getElementById('pop');
            pop.style.display = 'none';
        }