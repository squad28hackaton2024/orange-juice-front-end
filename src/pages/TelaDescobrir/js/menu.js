/* função para abrir o menu clicando no icone de menu*/
function menu(){
    let divmenu = document.getElementById('menu');
    if(divmenu.style.display == 'none'){
        divmenu.style.display = 'block';
    }
    else{
        divmenu.style.display = 'none';
    }
}