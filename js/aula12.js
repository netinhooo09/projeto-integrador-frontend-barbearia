
(() => {
  const servicos = [
    { id: 1, nome: "Corte masculino", preco: 25, selecionado: false },
    { id: 2, nome: "Barba", preco: 15, selecionado: false },
    { id: 3, nome: "Corte e barba", preco: 35, selecionado: false },
    { id: 4, nome: "Sobrancelha", preco: 10, selecionado: false },
    { id: 5, nome: "Pezinho", preco: 8, selecionado: false }
  ];

  const lista = document.querySelector("#lista-servicos");
  const busca = document.querySelector("#buscar-servico");
  const resumo = document.querySelector("#resumo-servicos");
  const formulario = document.querySelector("#form-servico");
  const botaoPainel = document.querySelector("#alternar-lista");
  const painel = document.querySelector("#painel-servicos");

  if (!lista || !busca || !resumo || !formulario ||
      !botaoPainel || !painel) {
    console.error("Elementos da Aula 12 não encontrados.");
    return;
  }

  function criarItem(servico) {
    const item = document.createElement("li");
    item.classList.add("item-servico");

    if (servico.selecionado) {
      item.classList.add("selecionado");
    }

    const descricao = document.createElement("span");
    descricao.textContent =
      `${servico.nome} - R$ ${servico.preco.toFixed(2)}`;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.dataset.id = String(servico.id);
    botao.setAttribute(
      "aria-pressed",
      String(servico.selecionado)
    );

    botao.textContent = servico.selecionado
      ? "Cancelar seleção"
      : "Selecionar";

    item.append(descricao, botao);
    return item;
  }

  // Calcula os dados do resumo
  function calcularResumo() {
    const selecionados = servicos.filter(
      servico => servico.selecionado
    );

    const total = selecionados.reduce(
      (soma, servico) => soma + servico.preco, 0
    );

    return {
      quantidade: selecionados.length,
      total
    };
  }

  function atualizarResumo(quantidadeVisivel) {
    const dados = calcularResumo();

    resumo.textContent =
      `${quantidadeVisivel} serviço(s) encontrado(s). ` +
      `${dados.quantidade} selecionado(s). ` +
      `Total: R$ ${dados.total.toFixed(2)}`;
  }

  function desenhar() {
    const termo = busca.value.trim().toLowerCase();

    const filtrados = servicos.filter(servico =>
      servico.nome.toLowerCase().includes(termo)
    );

    const itens = filtrados.map(criarItem);
    lista.replaceChildren(...itens);

    atualizarResumo(filtrados.length);
  }

  function aoClicarNaLista(evento) {
    const botao = evento.target.closest("button[data-id]");

    if (!botao || !lista.contains(botao)) {
      return;
    }

    const id = Number(botao.dataset.id);
    const servico = servicos.find(item => item.id === id);

    if (!servico) {
      return;
    }

    servico.selecionado = !servico.selecionado;
    desenhar();
  }

  function aoPesquisar() {
    desenhar();
  }

  function aoAdicionar(evento) {
    evento.preventDefault();

    const nomeCampo = document.querySelector("#novo-servico");
    const precoCampo = document.querySelector("#preco-servico");

    const nome = nomeCampo.value.trim();
    const preco = Number(precoCampo.value);

    if (!nome || !Number.isFinite(preco) || preco < 0) {
      alert("Informe um nome e um preço válido.");
      return;
    }

    const novoId = Math.max(...servicos.map(s => s.id)) + 1;

    servicos.push({
      id: novoId,
      nome,
      preco,
      selecionado: false
    });

    formulario.reset();
    busca.value = "";
    desenhar();
  }

  function fecharPainel() {
    painel.hidden = true;
    botaoPainel.setAttribute("aria-expanded", "false");
    botaoPainel.textContent = "Mostrar serviços";
  }

  function aoAlternarPainel() {
    const aberto = botaoPainel.getAttribute(
      "aria-expanded"
    ) === "true";

    if (aberto) {
      fecharPainel();
    } else {
      painel.hidden = false;
      botaoPainel.setAttribute("aria-expanded", "true");
      botaoPainel.textContent = "Ocultar serviços";
    }
  }

  function aoPressionarTecla(evento) {
    if (evento.key === "Escape" && !painel.hidden) {
      fecharPainel();
      botaoPainel.focus();
    }
  }

  function iniciarAula12() {
    lista.addEventListener("click", aoClicarNaLista);
    busca.addEventListener("input", aoPesquisar);
    formulario.addEventListener("submit", aoAdicionar);
    botaoPainel.addEventListener("click", aoAlternarPainel);
    document.addEventListener("keydown", aoPressionarTecla);

    desenhar();
  }

  iniciarAula12();
})();
