const inputArquivo = document.querySelector('#imagens-file')
const containerImg = document.querySelector('#container-img')
const iconeImg = document.querySelector('#icone-img')
const textoCOmpartilhe = document.querySelector('#texto-compartilhe')

inputArquivo.addEventListener('change', e => {

    const inputTarget = e.target
    const arquivo = inputTarget.files[0]

    if(arquivo) {
        const reader = new FileReader()

        reader.addEventListener('load', e => {
            const readerTarget = e.target

            iconeImg.classList.add('esconder')
            textoCOmpartilhe.classList.add('esconder')

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('imagem-arquivo')

            containerImg.appendChild(img)
        })

        reader.readAsDataURL(arquivo)
    }
})