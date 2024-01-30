function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "414036471424-i2accnpsbjitfiji6b177eqgthr9mm2n.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
        type:"standard",
        shape:"rectangular",
        theme:"outline",
        text:"signin_with",
       size:"large",
        locale:"pt-BR",
       logo_alignment:"center",
        width:"159"

    } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
};
