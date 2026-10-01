# ONG Solidariedade — EP IV

Projeto acadêmico da disciplina **Desenvolvimento Front-End para Web**, desenvolvido para consolidar práticas de versionamento, acessibilidade, otimização e preparação para deploy de uma aplicação front-end.

## Visão geral

A aplicação simula uma plataforma digital para uma organização do terceiro setor. O projeto apresenta iniciativas sociais, permite navegação em formato SPA, oferece formulário de cadastro de apoiadores e aplica recursos de acessibilidade e persistência local.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3
- JavaScript ES6+
- ES Modules
- CSS Grid e Flexbox
- localStorage
- Vite 7
- SweetAlert2 via CDN
- Git e GitHub
- WebP e JPEG responsivos

## Funcionalidades

- Navegação em **Single Page Application (SPA)** por hash
- Templates dinâmicos renderizados via JavaScript
- Formulário com validação nativa e lógica complementar
- Persistência de cadastros com `localStorage`
- Modal acessível para detalhes dos projetos
- Menu responsivo
- Modo de alto contraste
- Feedback visual com SweetAlert2
- Imagens responsivas com `<picture>`, `srcset` e `sizes`

## Estrutura do projeto

```text
.
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── imagens/
│   │   ├── acao-social.jpg
│   │   ├── acao-social-768.webp
│   │   └── acao-social-1200.webp
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── formulario.js
│   │       ├── router.js
│   │       ├── storage.js
│   │       ├── templates.js
│   │       └── ui.js
│   └── index.html
├── package.json
├── build.mjs
├── RELATORIO_BUILD.txt
├── RELATORIO_IMAGENS.txt
└── .gitignore
```

## Instalação e execução local

### Pré-requisitos

- Node.js instalado
- npm disponível no terminal

### Instalação

Clone o repositório:

```bash
git clone https://github.com/kelyvelten/ong-solidariedade-ep4.git
```

Acesse a pasta:

```bash
cd ong-solidariedade-ep4
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

## Build de produção

Para gerar a versão otimizada com Vite:

```bash
npm run build:vite
```

A build gera os arquivos de produção na pasta `dist-vite`, com processamento dos módulos, minificação e versionamento dos assets por hash.

Em uma execução validada durante a EP IV, o Vite 7.3.6 processou **9 módulos** e gerou aproximadamente:

- HTML: 2,06 kB
- CSS: 5,05 kB
- JavaScript: 7,13 kB

## Otimização de imagens

A imagem principal foi mantida em JPEG como fallback e convertida também para WebP em versões responsivas:

- JPEG original: 1448 × 1086 px — 278.960 bytes
- WebP 1200 px: 97.816 bytes — redução de aproximadamente 64,94%
- WebP 768 px: 55.016 bytes — redução de aproximadamente 80,28%

A aplicação utiliza `<picture>`, `srcset` e `sizes` para permitir que o navegador escolha o recurso adequado à viewport.

## Acessibilidade

O projeto aplica práticas compatíveis com as diretrizes estudadas da **WCAG 2.1 nível AA**, incluindo:

- landmarks semânticos: `header`, `nav`, `main` e `footer`
- link “Ir para o conteúdo principal”
- navegação por teclado
- foco visível com `:focus-visible`
- `aria-expanded` no menu mobile
- `aria-pressed` no controle de contraste
- `aria-live` para mensagens dinâmicas
- modal com `role="dialog"`, `aria-modal` e `aria-labelledby`
- associação entre `label` e campos de formulário
- uso de `aria-invalid` em validações
- modo de alto contraste
- textos alternativos em imagens

## Versionamento

O repositório utiliza Git e GitHub. A branch `main` representa a versão estável do projeto.

O fluxo de trabalho documentado para evolução do projeto segue princípios de GitFlow:

- `main`: versão estável
- `develop`: integração de funcionalidades
- `feature/*`: novas funcionalidades
- `hotfix/*`: correções urgentes

As mensagens de commit seguem o padrão **Conventional Commits**, por exemplo:

```text
feat: adiciona nova funcionalidade
fix: corrige comportamento inesperado
docs: atualiza documentação
refactor: reorganiza código sem alterar comportamento
chore: tarefas de manutenção ou estrutura
```

O versionamento de releases segue **Semantic Versioning (MAJOR.MINOR.PATCH)**.

## Persistência de dados

Esta versão não utiliza back-end. Os dados de cadastro são armazenados no navegador por meio de `localStorage`, usando serialização em JSON.

## Deploy

O projeto está preparado para publicação em uma plataforma de hospedagem estática integrada ao GitHub. Para deploy com build automática, utilize:

- comando de build: `npm run build:vite`
- diretório de publicação: `dist-vite`

A branch de produção recomendada é `main`.

## Documentação técnica

Os arquivos abaixo registram medições realizadas durante a experiência prática:

- `RELATORIO_BUILD.txt`
- `RELATORIO_IMAGENS.txt`

## Autora

**Kely Velten de Souza**  
Projeto acadêmico — Desenvolvimento Front-End para Web.
