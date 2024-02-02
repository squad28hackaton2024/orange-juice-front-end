const botaoSair = document.querySelector('#logout')

botaoSair.addEventListener('click', () => {
    sessionStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/login/index.html'
})
