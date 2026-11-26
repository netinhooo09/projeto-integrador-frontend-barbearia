
(() => {
  // Dados principais dos serviços da barbearia
  const servicos = [
    { id: 1, nome: "Corte de cabelo", preco: 30, selecionado: false },
    { id: 2, nome: "Barba", preco: 20, selecionado: false },
    { id: 3, nome: "Corte + Barba", preco: 45, selecionado: false },
    { id: 4, nome: "Sobrancelha", preco: 15, selecionado: false },
    { id: 5, nome: "Hidratação", preco: 40, selecionado: false }
  ];

  const lista = document.querySelector("#lista-servicos");
  const busca = document.querySelector("#buscar-servico");
  const resumo = document.querySelector("#resumo-servicos");
  const formulario = document.querySelector("#form-servico");
  const botaoPainel = document.querySelector("#alternar-lista");
  const painel = document.querySelector("#painel-servicos");
  const nomeCampo = document.querySelector("#novo-servico");
  const precoCampo = document.querySelector("#preco-servico");
  const secao = document.querySelector("#gerenciar-servicos");

  if (!lista || !busca || !resumo || !formulario ||
      !botaoPainel || !painel || !nomeCampo ||
      !precoCampo || !secao) {
    console.error("Elementos da Aula 12 não encontrados.");
    return;
  }

  const moeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  // Cria os itens sem utilizar innerHTML
  function criarItem(servico) {
    const item = document.createElement("li");
    item.classList.add("item-servico");

    if (servico.selecionado) {
      item.classList.add("selecionado");
    }

    const descricao = document.createElement("span");

    descricao.textContent =
      `${servico.nome} - ${moeda.format(servico.preco)}`;

    const botao = document.createElement("button");

    botao.type = "button";
    botao.classList.add("botao");
    botao.dataset.id = String(servico.id);

    botao.setAttribute(
      "aria-pressed",
      String(servico.selecionado)
    );

    botao.setAttribute(
      "aria-label",
      `Selecionar ${servico.nome}`
    );

    botao.textContent = "Selecionar";

    item.append(descricao, botao);

    return item;
  }

  // Função pura para calcular o resumo
  function calcularResumo(dados) {
    const selecionados = dados.filter(
      servico => servico.selecionado
    );

    const total = selecionados.reduce(
      (soma, servico) => soma + servico.preco,
      0
    );

    return {
      quantidade: selecionados.length,
      total
    };
  }

  function atualizarResumo(quantidadeVisivel) {
    const dados = calcularResumo(servicos);

    resumo.textContent =
      `${quantidadeVisivel} serviço(s) encontrado(s). ` +
      `${dados.quantidade} selecionado(s). ` +
      `Total: ${moeda.format(dados.total)}`;
  }

  // Atualiza a lista com base nos dados
  function desenhar() {
    const termo = busca.value.trim().toLowerCase();

    const filtrados = servicos.filter(servico =>
      servico.nome.toLowerCase().includes(termo)
    );

    const itens = filtrados.map(criarItem);

    lista.replaceChildren(...itens);

    atualizarResumo(filtrados.length);
  }

  // Delegação de eventos
  function aoClicarNaLista(evento) {
    const botao = evento.target.closest("button[data-id]");

    if (!botao || !lista.contains(botao)) {
      return;
    }

    const id = Number(botao.dataset.id);

    const servico = servicos.find(
      item => item.id === id
    );

    if (!servico) {
      return;
    }

    servico.selecionado = !servico.selecionado;

    desenhar();

    const novoBotao = lista.querySelector(
      `button[data-id="${id}"]`
    );

    if (novoBotao) {
      novoBotao.focus();
    }
  }

  function aoPesquisar() {
    desenhar();
  }

  // Adiciona novos serviços
  function aoAdicionar(evento) {
    evento.preventDefault();

    const nome = nomeCampo.value.trim();
    const preco = Number(precoCampo.value);

    if (!nome || !Number.isFinite(preco) || preco <= 0) {
      alert("Informe um nome e um preço válido.");
      return;
    }

    const novoId =
      Math.max(...servicos.map(s => s.id)) + 1;

    servicos.push({
      id: novoId,
      nome,
      preco,
      selecionado: false
    });

    formulario.reset();
    busca.value = "";

    abrirPainel();
    desenhar();

    nomeCampo.focus();
  }

  function abrirPainel() {
    painel.hidden = false;

    botaoPainel.setAttribute(
      "aria-expanded",
      "true"
    );

    botaoPainel.textContent = "Ocultar serviços";
  }

  function fecharPainel() {
    painel.hidden = true;

    botaoPainel.setAttribute(
      "aria-expanded",
      "false"
    );

    botaoPainel.textContent = "Mostrar serviços";
  }

  function aoAlternarPainel() {
    if (painel.hidden) {
      abrirPainel();
    } else {
      fecharPainel();
    }
  }

  function aoPressionarTecla(evento) {
    if (evento.key === "Escape" && !painel.hidden) {
      fecharPainel();
      botaoPainel.focus();
    }
  }

  // Registra os eventos uma única vez
  function iniciarAula12() {
    lista.addEventListener("click", aoClicarNaLista);

    busca.addEventListener("input", aoPesquisar);

    formulario.addEventListener("submit", aoAdicionar);

    botaoPainel.addEventListener("click", aoAlternarPainel);

    secao.addEventListener("keydown", aoPressionarTecla);

    abrirPainel();
    desenhar();
  }

  iniciarAula12();
})();
