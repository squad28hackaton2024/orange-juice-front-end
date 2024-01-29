        /* função para abrir e fechar o menu clicando no icone de menu*/
        function menu(){
            let divmenu = document.getElementById('menu');
            if(divmenu.style.display == 'none'){
                divmenu.style.display = 'block';
            }
            else{
                divmenu.style.display = 'none';
            }
        }

        /* função para fechar o menu quando o usuario clicar no main*/
        function fechaMenu(){
            let divmenu = document.getElementById('menu');
            divmenu.style.display = 'none';
        }