# projeto-integrador-frontend-barbearia
O projeto aplica corretamente a estrutura semântica básica (header, nav, main único, hierarquia de headings sem saltos) e o conteúdo está bem alinhado ao tema da barbearia. Porém, alguns pontos importantes das Aulas 3 e 4 ainda não foram atendidos: falta o elemento <footer>, não há nenhum formulário implementado (critério da Aula 3), e a seção de mídia possui apenas um formato de vídeo, sem fallback, preload ou poster, conforme pedido na Aula 4. e completar o README com a descrição do projeto.




# Barbearia do Seu Zé

## Sobre o projeto

A Barbearia do Seu Zé é um projeto desenvolvido para apresentar
os serviços de uma barbearia, seus preços e informações de contato.

O objetivo é criar uma página simples, organizada e responsiva,
utilizando conhecimentos de desenvolvimento Front-End.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Funcionalidades

- Apresentação da barbearia.
- Menu de navegação responsivo.
- Exibição de serviços e preços.
- Reprodução de vídeo com suporte a legendas.
- Formulário demonstrativo de agendamento.
- Análise de dados dos serviços utilizando JavaScript.
- Pesquisa e seleção de serviços.
- Adição de novos serviços.
- Atualização automática da quantidade e do valor total.

## Estrutura do projeto

- index.html: estrutura principal da página.
- css/reset.css: configurações iniciais do navegador.
- css/style.css: estilos visuais da página.
- js/logica.js: lógica de programação e análise dos serviços.
- js/script.js: funções, manipulação do DOM e interatividade.
- js/aula12.js: eventos e lista interativa de serviços.
- assets/images/: imagens utilizadas no projeto.
- assets/videos/: arquivos de vídeo.
- assets/legendas/: arquivos de legenda.

## Como executar

1. Abra a pasta do projeto no Visual Studio Code.
2. Confira se os arquivos estão nas pastas indicadas.
3. Abra o arquivo index.html com o Live Server ou no navegador.

## Conteúdos aplicados nas aulas

Durante o desenvolvimento do projeto, coloquei em prática
os conteúdos estudados até a Aula 12.

- Estrutura básica do HTML.
- HTML semântico e acessibilidade.
- Formulários e validação de campos.
- Imagens, vídeos e legendas.
- Estilização com CSS.
- Flexbox e Grid.
- Menu responsivo.
- Lógica de programação com JavaScript.
- Funções, arrays e manipulação do DOM.
- Eventos e delegação de eventos.
- Git, GitHub, branches e Pull Request.

Na Aula 12, adicionei uma lista interativa que permite
pesquisar, selecionar e cadastrar serviços, atualizando
automaticamente a quantidade e o valor total.

## Avaliações em pares

### Primeira avaliação

[Inserir a avaliação do primeiro colega.]

### Segunda avaliação

[Inserir a avaliação do segundo colega.]

## Observação

O formulário de agendamento é demonstrativo e não envia
informações para um servidor ou sistema de reservas.

<<<<<<< HEAD

=======
------------------------ CODE REVIEW BARBEARIA DO SEU ZÉ 16/11/2026 -----------------------

Gostei bastante do projeto da Barbearia do Seu Zé: a paleta marrom e creme combina com o tema, o menu é limpo e responsivo, e as seções (início, vídeo, serviços, sobre, agendamento, análise e contato) têm uma hierarquia clara que facilita a navegação. O código também mostra cuidado com acessibilidade, com aria-label, aria-expanded, aria-live e labels ligados aos campos do formulário. Sobre a Aula 11, o script.js atende a maior parte do checkpoint: o array tem cinco objetos com três propriedades, calcularPreco usa parâmetro com valor padrão e return, classificarServico divide em três faixas na ordem correta, e map, filter e reduce têm propósito claro. O DOM é montado com createElement, textContent e append, sem innerHTML, as faixas recebem classes diferentes e o resumo aparece na página. Achei boa a organização em IIFE, que evita conflito de nomes entre logica.js e script.js, o replaceChildren, que não duplica os cards a cada clique, e a checagem de null antes de usar cada elemento. Os testes das funções aparecem no Console com mais de um valor, como o PDF pede. Como sugestões de melhoria, vejo três pontos. O primeiro é criar uma função própria que monte o card e devolva o elemento, já que hoje ele é construído dentro do forEach, e isso separaria melhor o cálculo da exibição, como o passo final da atividade pede. O segundo é usar o desconto de calcularPreco, que hoje é chamada sem o segundo argumento e devolve o preço original, de modo que o parâmetro padrão existe, mas não chega a influenciar o resultado. O terceiro é a entrega: o Console mostra erro 404 para barbearia.webm e barbearia-pt.vtt, que o HTML referencia, mas não estão no repositório, e o README cita a pasta assets, que também não aparece. São ajustes pequenos num trabalho bem feito, e com eles o projeto fica completo. 

Avaliado por Felipe Alves.
>>>>>>> 84b749f4ec693b7ab8b98b6f2a4aceec45196a7a
