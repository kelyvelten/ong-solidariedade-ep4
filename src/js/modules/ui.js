// Componentes de interface e acessibilidade.
import { obterProjeto } from "./templates.js";
import { lerPreferenciaContraste, salvarPreferenciaContraste } from "./storage.js";

let ultimoFoco = null;

export function abrirModal(idProjeto) {
  const projeto = obterProjeto(idProjeto);
  const modal = document.querySelector("#modal");
  const corpo = document.querySelector("#modal-corpo");

  if (!projeto || !modal || !corpo) return;

  ultimoFoco = document.activeElement;
  corpo.innerHTML = `<p><strong>${projeto.titulo}</strong></p><p>${projeto.descricao}</p>`;
  modal.hidden = false;
  modal.querySelector("button").focus();
}

export function fecharModal() {
  const modal = document.querySelector("#modal");
  if (!modal) return;
  modal.hidden = true;
  ultimoFoco?.focus();
}

export function configurarContraste() {
  const botao = document.querySelector("#contraste-button");
  const aplicar = (ativo) => {
    document.body.classList.toggle("alto-contraste", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
    salvarPreferenciaContraste(ativo);
  };

  aplicar(lerPreferenciaContraste());

  botao.addEventListener("click", () => {
    aplicar(!document.body.classList.contains("alto-contraste"));
  });
}

export function configurarMenu() {
  const botao = document.querySelector("#menu-button");
  const menu = document.querySelector("#menu-principal");

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", aberto ? "Fechar menu de navegação" : "Abrir menu de navegação");
  });
}
