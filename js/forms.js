// forms.js

function initFormValidation() {
  const form = document.getElementById("formCadastro");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    if (nome.value.trim() === "" || email.value.trim() === "") {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    if (!email.value.includes("@")) {
      alert("E-mail inválido! Verifique e tente novamente.");
      return;
    }

    alert("Cadastro enviado com sucesso!");
    form.reset();
  });
}
