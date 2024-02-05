const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const botaoCasdastrar = document.querySelector('#botao-cadastrar')
const mensagem = document.querySelector('#mensagem')
const containerMensagemSucesso = document.querySelector('#mensagem-sucesso')


async function consomeApiCadastro(name, lastName, email, password) {
  botaoCasdastrar.disabled = true

  const dadosUsuario = {
    nome: name,
    sobrenome: lastName,
    email: email,
    senha: password
  }

  const dados = await fetch('http://localhost:8080/usuarios', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(dadosUsuario)
  })


  const resposta = await dados.json()


  if(resposta.message == 'Cadastro feito com sucesso') {
    containerMensagemSucesso.classList.remove('mensagem-desaparecer')
    mensagem.innerHTML = resposta.message

    botaoCasdastrar.disabled = false
    return
  }
  
  
  if(resposta.message == 'Usuário já existente') {
    alert('Usuário já existe com este email')
    botaoCasdastrar.disabled = false
    return
  }
  
  botaoCasdastrar.disabled = false
  alert("Email inválido ou senha com no mínimo 8 caracteres")

}

botaoCasdastrar.addEventListener('click', async (e) => {
  e.preventDefault()

  const valueFirstNameMinusculo = firstName.value.toLowerCase()
  const valueLastNameMinusculo = lastName.value.toLowerCase()
  const valueEmailMinusculo = email.value.toLowerCase()
  const valuePassword = password.value


  await consomeApiCadastro(
    valueFirstNameMinusculo,
    valueLastNameMinusculo,
    valueEmailMinusculo,
    valuePassword
  )
})

