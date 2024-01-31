function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
