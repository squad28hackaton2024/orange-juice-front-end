const inputArquivo = document.querySelector('#imagens-file')
const containerImg = document.querySelector('#container-img')
const iconeImg = document.querySelector('#icone-img')
const textoCOmpartilhe = document.querySelector('#texto-compartilhe')
const imagemVizualizar = document.querySelector('#imagem-vizualizar')

inputArquivo.addEventListener('change', e => {
    const inputTarget = e.target
    const arquivo = inputTarget.files[0]

    // Verifica se há uma imagem existente no container
    const imagemExistente = containerImg.querySelector('.imagem-arquivo')
    if (imagemExistente) {
        containerImg.removeChild(imagemExistente); // Remove a imagem anterior
    }

    if (arquivo) {
        const reader = new FileReader()

        reader.addEventListener('load', e => {
            const readerTarget = e.target

            iconeImg.classList.add('esconder')
            textoCOmpartilhe.classList.add('esconder')

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('imagem-arquivo')
            imagemVizualizar.classList.add('imagem-vizualizar')

            containerImg.appendChild(img)
            imagemVizualizar.src = readerTarget.result
        })

        reader.readAsDataURL(arquivo)
    }
})
