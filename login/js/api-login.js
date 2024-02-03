const botaoLogin = document.querySelector('#botao-login')
const emailLogin = document.querySelector('#email-login')
const passwordLogin = document.querySelector('#password-login')

//https://orangeporfolio-fcfy.onrender.com
//http://localhost:8080

async function consomeApiAuth(email, password) {
    botaoLogin.disabled = true

    const dadosAuth = {
        email: email,
        senha: password
    }

    const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/usuarios/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(dadosAuth)
    })

    const resposta = await dados.json()

    if(resposta.message === 'Usuário Logado') {
        armazernaToken(resposta.token)
        window.location.href = "http://127.0.0.1:5500/orange-juice-front-end/projetos/projetos.html"
        botaoLogin.disabled = false
        return
    } 
    
    alert(resposta.message)
    sessionStorage.removeItem('token')
    botaoLogin.disabled = false
    
}

function armazernaToken(token) {
    const storage = sessionStorage.setItem('token', token)

    return storage
}

botaoLogin.addEventListener('click', async (e) => {
    e.preventDefault()

    const valueEmail = emailLogin.value.toLowerCase()
    const valuePassword = passwordLogin.value 

    await consomeApiAuth(valueEmail, valuePassword)
})