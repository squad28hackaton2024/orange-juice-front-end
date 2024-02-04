const botaoSair = document.querySelector('#logout')

botaoSair.addEventListener('click', () => {
    sessionStorage.removeItem('token')
    window.location.href = 'https://squad28hackaton2024.github.io/orange-juice-front-end/index.html'
})
