// templates.js

const templates = {
  home: `
    <section class="intro">
      <h2>Bem-vindo à ONG Pequeno Cidadão</h2>
      <p>Transformando vidas por meio da educação, cultura e solidariedade.</p>
    </section>
  `,

  projetos: `
    <section class="projects">
      <h2>Projetos</h2>
      <p>Veja nossas iniciativas em andamento!</p>
    </section>
  `,

  cadastro: `
    <section class="cadastro">
      <h2>Cadastro</h2>
      <form id="formCadastro">
        <label>Nome: <input type="text" id="nome" required></label>
        <label>Email: <input type="email" id="email" required></label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `
};
