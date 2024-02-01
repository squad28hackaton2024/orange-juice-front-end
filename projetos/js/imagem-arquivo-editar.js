const inputArquivoEditar = document.querySelector('#imagens-file-editar')
const containerImgEditar = document.querySelector('#container-img-editar')
const iconeImgEditar = document.querySelector('#icone-img-editar')
const textoCOmpartilheEditar = document.querySelector('#texto-compartilhe-editar')
const imagemVizualizarEditar = document.querySelector('#imagem-vizualizar')

inputArquivoEditar.addEventListener('change', e => {
    const inputTarget = e.target
    const arquivo = inputTarget.files[0]

    // Verifica se há uma imagem existente no container
    const imagemExistenteEditar = containerImgEditar.querySelector('.imagem-arquivo')
    if (imagemExistenteEditar) {
        containerImgEditar.removeChild(imagemExistenteEditar); // Remove a imagem anterior
    }

    if (arquivo) {
        const reader = new FileReader()

        reader.addEventListener('load', e => {
            const readerTarget = e.target

            iconeImgEditar.classList.add('esconder')
            textoCOmpartilheEditar.classList.add('esconder')

            const imgEditar = document.createElement('img')
            imgEditar.src = readerTarget.result
            imgEditar.classList.add('imagem-arquivo')
            imagemVizualizarEditar.classList.add('imagem-vizualizar')

            containerImgEditar.appendChild(imgEditar)
            imagemVizualizarEditar.src = readerTarget.result
        })

        reader.readAsDataURL(arquivo)
    }
})
