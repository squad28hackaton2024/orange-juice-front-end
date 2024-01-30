function handleCredentialResponse(response) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = jwt_decode(response.credential);

  console.log("ID: " + responsePayload.sub);
  console.log("Full Name: " + responsePayload.name);
  console.log("Given Name: " + responsePayload.given_name);
  console.log("Family Name: " + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
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
      type: "standard",
      shape: "rectangular",
      theme: "outline",
      text: "signin_with",
      size: "large",
      locale: "pt-BR",
      logo_alignment: "center",
      width: "159",
    } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
};
