import fs from "node:fs";
import path from "node:path";

const root = new URL(".", import.meta.url).pathname;
const src = path.join(root, "src");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "assets"), { recursive: true });
fs.mkdirSync(path.join(dist, "imagens"), { recursive: true });

function stripComments(text, kind) {
  if (kind === "html") return text.replace(/<!--[\s\S]*?-->/g, "");
  return text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
}

function minifyCSS(text) {
  return stripComments(text, "css")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function minifyHTML(text) {
  return stripComments(text, "html")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
}

const moduleOrder = [
  "js/modules/storage.js",
  "js/modules/templates.js",
  "js/modules/formulario.js",
  "js/modules/ui.js",
  "js/modules/router.js",
  "js/main.js"
];

function bundleJS() {
  let combined = "";
  for (const rel of moduleOrder) {
    let code = fs.readFileSync(path.join(src, rel), "utf8");
    code = code.replace(/^import\s+[^;]+;\s*$/gm, "");
    code = code.replace(/\bexport\s+(?=(function|const|let|var|class)\b)/g, "");
    combined += "\n" + code;
  }
  return stripComments(combined, "js")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}();,:=<>+\-*?])\s*/g, "$1")
    .trim();
}

const css = minifyCSS(fs.readFileSync(path.join(src, "css/styles.css"), "utf8"));
fs.writeFileSync(path.join(dist, "assets/styles.min.css"), css);

const js = bundleJS();
fs.writeFileSync(path.join(dist, "assets/app.min.js"), js);

let html = minifyHTML(fs.readFileSync(path.join(src, "index.html"), "utf8"))
  .replace("./css/styles.css", "./assets/styles.min.css")
  .replace('<script type="module" src="./js/main.js"></script>', '<script src="./assets/app.min.js"></script>');
fs.writeFileSync(path.join(dist, "index.html"), html);

fs.copyFileSync(path.join(src, "imagens/acao-social.jpg"), path.join(dist, "imagens/acao-social.jpg"));

console.log("Build concluída em dist/");
