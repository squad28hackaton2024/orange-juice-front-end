const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");

  if (toastTrigger) {
    const toastBootstrap = new bootstrap.Toast(toastLiveExample, {
      autohide: false, // Mantenha como falso para permitir o controle manual de exibição/ocultação
    });

    toastTrigger.addEventListener("click", () => {
      toastBootstrap.show();

      // Oculta o toast após 5 segundos
      setTimeout(() => {
        toastBootstrap.hide();
      }, 3000);
    });
  }
});
