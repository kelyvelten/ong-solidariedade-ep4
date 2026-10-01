// Responsável por resolver a rota ativa e renderizar o template correspondente.
import { templates } from "./templates.js";

export function renderizarRota() {
  const app = document.querySelector("#app");
  const rota = window.location.hash || "#inicio";
  const render = templates[rota] || templates["#404"];

  app.innerHTML = render();
  app.focus();

  if (rota === "#cadastro") {
    document.dispatchEvent(new CustomEvent("rota:cadastro"));
  }
}

export function iniciarRouter() {
  window.addEventListener("hashchange", renderizarRota);
  renderizarRota();
}
