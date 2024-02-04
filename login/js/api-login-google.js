
function handleCredentialResponse(response) {
  console.log("Response:", response);
  
  // Extrair a parte do payload (entre o segundo e o terceiro ponto)
  const base64Url = response.credential.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const decodedData = JSON.parse(atob(base64));

  console.log("Decoded Data:", decodedData);

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
    } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
};

