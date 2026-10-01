// Camada isolada de persistência no navegador.
const CHAVE = "ong-solidariedade-cadastros";

export function obterCadastros() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
  } catch {
    return [];
  }
}

export function adicionarCadastro(cadastro) {
  const atual = obterCadastros();
  atual.push(cadastro);
  localStorage.setItem(CHAVE, JSON.stringify(atual));
  return atual;
}

export function lerPreferenciaContraste() {
  return localStorage.getItem("ong-alto-contraste") === "true";
}

export function salvarPreferenciaContraste(ativo) {
  localStorage.setItem("ong-alto-contraste", String(ativo));
}
