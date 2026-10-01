# Plano de validação de acessibilidade

Este documento registra o procedimento de validação manual de acessibilidade da aplicação ONG Solidariedade.

## Escopo

A validação contempla:

- navegação por teclado;
- ordem lógica de foco;
- visibilidade do foco;
- acesso ao menu responsivo;
- acionamento e fechamento do modal;
- preenchimento e validação do formulário;
- modo de alto contraste;
- leitura dos principais landmarks e controles por tecnologia assistiva.

## Roteiro de teste por teclado

1. Abrir a aplicação publicada.
2. Pressionar `Tab` a partir do topo da página.
3. Confirmar que o link "Ir para o conteúdo principal" recebe foco.
4. Percorrer menu, botão de alto contraste e demais controles sem utilizar o rato.
5. Acessar a página de projetos e abrir um modal usando apenas o teclado.
6. Fechar o modal com o botão de fechamento e com a tecla `Esc`.
7. Acessar o formulário e verificar a sequência lógica de foco.
8. Submeter o formulário com campos inválidos e confirmar a apresentação das mensagens de erro.
9. Ativar o modo de alto contraste e confirmar que o foco permanece perceptível.

## Roteiro de teste com leitor de ecrã

Validar com Narrador do Windows, NVDA ou tecnologia equivalente:

- identificação do cabeçalho, navegação principal, conteúdo principal e rodapé;
- anúncio dos nomes dos links e botões;
- anúncio do estado expandido/recolhido do menu;
- anúncio do estado do botão de alto contraste;
- leitura do título e conteúdo do modal;
- associação entre labels, inputs e mensagens de erro;
- leitura coerente do conteúdo dinâmico.

## Evidências

Os resultados observados devem ser registrados após a execução manual dos testes. Este ficheiro foi criado por meio de uma branch `feature/*` e integrado ao fluxo principal através de pull request, como evidência do processo GitFlow adotado no projeto.
