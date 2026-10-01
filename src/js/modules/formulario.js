// Validação e persistência do formulário.
import { adicionarCadastro, obterCadastros } from "./storage.js";

function mensagemPara(campo) {
  if (campo.validity.valueMissing) return "Campo obrigatório.";
  if (campo.validity.typeMismatch) return "Informe um e-mail válido.";
  if (campo.validity.patternMismatch) return "Use o formato solicitado.";
  return "";
}

export function validarCampo(campo) {
  const valido = campo.checkValidity();
  const mensagem = mensagemPara(campo);
  const areaErro = document.querySelector(`#erro-${campo.id}`);

  campo.classList.toggle("campo-sucesso", valido);
  campo.classList.toggle("campo-erro", !valido);
  campo.setAttribute("aria-invalid", String(!valido));

  if (areaErro) {
    areaErro.textContent = valido ? "" : mensagem;
  }

  return valido;
}

export function renderizarCadastros() {
  const lista = document.querySelector("#lista-cadastros");
  if (!lista) return;

  const cadastros = obterCadastros();
  lista.innerHTML = cadastros.length
    ? cadastros.map((item) => `<li><strong>${item.nome}</strong> — ${item.email}</li>`).join("")
    : "<li>Nenhum cadastro salvo.</li>";
}

export function processarFormulario(form) {
  const campos = [...form.querySelectorAll("input")];
  const valido = campos.map(validarCampo).every(Boolean);

  if (!valido) {
    window.Swal?.fire({
      icon: "error",
      title: "Revise os campos",
      text: "Existem informações ausentes ou inválidas."
    });
    return;
  }

  const cadastro = Object.fromEntries(new FormData(form).entries());
  adicionarCadastro(cadastro);
  form.reset();
  campos.forEach((campo) => {
    campo.classList.remove("campo-sucesso", "campo-erro");
    campo.setAttribute("aria-invalid", "false");
  });

  renderizarCadastros();

  window.Swal?.fire({
    icon: "success",
    title: "Cadastro realizado",
    text: "Os dados foram salvos neste navegador."
  });
}
