
async function handleCredentialResponse(response) {
  
  const base64Url = response.credential.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const decodedData = JSON.parse(atob(base64));
  

  const { email, given_name, family_name, sub } = decodedData

 await cadastroGoogle(given_name, family_name, email, sub)
  
}

window.onload = function () {
  
  const clientID = "414036471424-i2accnpsbjitfiji6b177eqgthr9mm2n.apps.googleusercontent.com"

  google.accounts.id.initialize({
    client_id: clientID,
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      type: "standard",
      shape: "rectangular",
      theme: "outline",
      text: "signin_with",
      size: "large",
      locale: "pt-BR",
      logo_alignment: "left",
      width: "175 40",
    } 
  );

  google.accounts.id.prompt(); 
};

async function cadastroGoogle(nome, sobrenome, email, senha) {

  const dadosGoogle = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha
  }

  const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/usuarios', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(dadosGoogle)
  })
  const resposta = await dados.json()

  if(resposta.message == "Usuário já existente") {
    const login = await loginGoogle(email, senha)
    
    sessionStorage.setItem('token', login.token)
    window.location.href = 'http://localhost:5500/projetos/projetos.html'
  }

  if(resposta.message == "Cadastro feito com sucesso") {
    alert('Usuário autenticado com sucesso, clique de novo no botão de login com o google para acessar o site !')
  }
  
  return resposta
}

async function loginGoogle(email, senha) {

  const dadosGoogle = {
    email: email,
    senha: senha
  }

  const dados = await fetch('https://orangeporfolio-fcfy.onrender.com/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dadosGoogle)
  })

  const resposta = await dados.json()
  
  return resposta


}

