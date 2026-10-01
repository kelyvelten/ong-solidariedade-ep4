// Ponto de entrada da aplicação.
import { iniciarRouter } from "./modules/router.js";
import { validarCampo, processarFormulario, renderizarCadastros } from "./modules/formulario.js";
import { abrirModal, fecharModal, configurarContraste, configurarMenu } from "./modules/ui.js";

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  const botaoAcao = event.target.closest("[data-acao]");

  if (link) {
    event.preventDefault();
    window.location.hash = link.getAttribute("href");
  }

  if (botaoAcao) {
    const acao = botaoAcao.dataset.acao;
    if (acao === "saiba-mais") abrirModal(botaoAcao.dataset.id);
    if (acao === "fechar-modal") fecharModal();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#form-cadastro input")) {
    validarCampo(event.target);
  }
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches("#form-cadastro")) return;
  event.preventDefault();
  processarFormulario(event.target);
});

document.addEventListener("rota:cadastro", renderizarCadastros);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModal();
  }
});

configurarContraste();
configurarMenu();
iniciarRouter();
