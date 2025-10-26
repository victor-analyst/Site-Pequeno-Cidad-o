// main.js

// Função simples de navegação SPA
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  function carregarPagina(hash) {
    const pagina = hash.replace("#", "") || "home";
    const template = templates[pagina] || `<h2>Página não encontrada</h2>`;
    main.innerHTML = template;

    // Se for página de cadastro, ativa a verificação de formulário
    if (pagina === "cadastro") initFormValidation();
  }

  // Lida com cliques nos links
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const hash = href;
        window.location.hash = hash;
        carregarPagina(hash);
      }
    });
  });

  // Carrega página atual ao abrir
  carregarPagina(window.location.hash);
});
