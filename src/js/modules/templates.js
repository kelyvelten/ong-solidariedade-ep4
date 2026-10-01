import acaoSocialJpg from "../../imagens/acao-social.jpg";
import acaoSocial768 from "../../imagens/acao-social-768.webp";
import acaoSocial1200 from "../../imagens/acao-social-1200.webp";

// Dados e templates reutilizáveis exibidos na SPA.
const projetos = [
  {
    id: "alimentacao",
    categoria: "Assistência social",
    titulo: "Alimentação Solidária",
    descricao: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade social."
  },
  {
    id: "educacao",
    categoria: "Educação",
    titulo: "Educação para Todos",
    descricao: "Apoio educacional a crianças e adolescentes por meio de atividades e acompanhamento voluntário."
  },
  {
    id: "comunidade",
    categoria: "Voluntariado",
    titulo: "Comunidade em Ação",
    descricao: "Mobilização de voluntários para ações sociais e atividades de apoio à comunidade."
  }
];

function cardProjeto(projeto) {
  return `
    <article class="card">
      <span class="badge">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <button class="btn" type="button" data-acao="saiba-mais" data-id="${projeto.id}">
        Saiba mais
      </button>
    </article>
  `;
}

export function obterProjeto(id) {
  return projetos.find((projeto) => projeto.id === id);
}

export const templates = {
  "#inicio": () => `
    <section class="hero">
      <div>
        <h1>Transformando vidas por meio da solidariedade</h1>
        <p>Conheça nossos projetos, participe como voluntário e ajude a fortalecer ações sociais na comunidade.</p>
        <a class="btn" href="#projetos" data-link>Conhecer projetos</a>
      </div>
      <picture>
        <source
          type="image/webp"
          srcset="${acaoSocial768} 768w, ${acaoSocial1200} 1200w"
          sizes="(max-width: 767px) 100vw, 42vw">
        <img
          src="${acaoSocialJpg}"
          alt="Voluntários distribuindo alimentos durante uma ação social"
          width="1200"
          height="900"
          loading="eager"
          decoding="async">
      </picture>
    </section>
  `,

  "#projetos": () => `
    <section class="section">
      <h1>Projetos sociais</h1>
      <p>Conheça as iniciativas atualmente abertas para participação.</p>
      <div class="grid">
        ${projetos.map(cardProjeto).join("")}
      </div>
    </section>
  `,

  "#cadastro": () => `
    <section class="section">
      <h1>Cadastro de apoiadores</h1>
      <p>Preencha seus dados para registrar interesse em participar das ações.</p>
      <form id="form-cadastro" novalidate>
        <div class="campo">
          <label for="nome">Nome completo</label>
          <input id="nome" name="nome" type="text" required aria-describedby="erro-nome">
          <p id="erro-nome" class="mensagem-erro"></p>
        </div>
        <div class="campo">
          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" required aria-describedby="erro-email">
          <p id="erro-email" class="mensagem-erro"></p>
        </div>
        <div class="campo">
          <label for="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel"
                 pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
                 placeholder="(27) 99999-9999"
                 required aria-describedby="erro-telefone">
          <p id="erro-telefone" class="mensagem-erro"></p>
        </div>
        <button class="btn" type="submit">Salvar cadastro</button>
      </form>
      <section class="lista-cadastros" aria-labelledby="cadastros-titulo">
        <h2 id="cadastros-titulo">Cadastros armazenados neste navegador</h2>
        <ul id="lista-cadastros"></ul>
      </section>
    </section>
  `,

  "#404": () => `
    <section class="section">
      <h1>Página não encontrada</h1>
      <p>A rota informada não existe.</p>
      <a class="btn" href="#inicio" data-link>Voltar ao início</a>
    </section>
  `
};
