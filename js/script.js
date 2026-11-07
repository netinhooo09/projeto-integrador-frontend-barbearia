
(function () {
    
    const servicos = [
        {
            nome: "Corte de cabelo",
            preco: 30,
            duracao: 30
        },
        {
            nome: "Barba",
            preco: 20,
            duracao: 20
        },
        {
            nome: "Corte + Barba",
            preco: 45,
            duracao: 50
        },
        {
            nome: "Sobrancelha",
            preco: 15,
            duracao: 15
        },
        {
            nome: "Hidratação",
            preco: 40,
            duracao: 40
        }
    ];

    function calcularPreco(servico, desconto = 0) {

        return servico.preco * (1 - desconto);

    }

    function classificarServico(preco) {

        if (preco <= 25) {
            return "Econômico";
        } else if (preco <= 35) {
            return "Intermediário";
        } else {
            return "Premium";
        }

    }

    console.log("Teste de funções:");

    console.log(calcularPreco(servicos[0]));

    console.log(calcularPreco(servicos[0], 0.10));

    console.log(classificarServico(20));

    console.log(classificarServico(30));

    console.log(classificarServico(45));

    const botaoMenu = document.querySelector("#botao-menu");

    const listaMenu = document.querySelector("#lista-menu");

    if (botaoMenu !== null && listaMenu !== null) {

        botaoMenu.addEventListener("click", function () {

            const menuAberto = listaMenu.classList.toggle("aberto");

            botaoMenu.setAttribute(
                "aria-expanded",
                String(menuAberto)
            );

            botaoMenu.setAttribute(
                "aria-label",
                menuAberto ? "Fechar menu" : "Abrir menu"
            );

        });

        const linksMenu = listaMenu.querySelectorAll("a");

        linksMenu.forEach(function (link) {

            link.addEventListener("click", function () {

                listaMenu.classList.remove("aberto");

                botaoMenu.setAttribute("aria-expanded", "false");

                botaoMenu.setAttribute("aria-label", "Abrir menu");

            });

        });

    }

    const ano = document.querySelector("#ano");

    if (ano !== null) {

        ano.textContent = new Date().getFullYear();

    }

    const formulario = document.querySelector("#formulario");

    const mensagem = document.querySelector("#mensagem");

    if (formulario !== null && mensagem !== null) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nome = document.querySelector("#nome").value.trim();

            const servico = document.querySelector("#servico").value;

            const data = document.querySelector("#data").value;

            if (nome === "" || servico === "" || data === "") {

                mensagem.textContent = "Preencha todos os campos.";

                return;

            }

            mensagem.textContent =
                `Olá, ${nome}! Sua solicitação para ${servico}, ` +
                `na data ${data}, foi registrada nesta demonstração.`;

            formulario.reset();

        });

    }

    const botaoResultado = document.querySelector("#botao-resultado");

    const areaResultado = document.querySelector("#resultado");

    const listaResultados = document.querySelector("#lista-resultados");

    if (
        botaoResultado !== null &&
        areaResultado !== null &&
        listaResultados !== null
    ) {

        botaoResultado.addEventListener("click", mostrarResultados);

    }

    function mostrarResultados() {

        const dadosProcessados = servicos.map(function (servico) {

            const precoFinal = calcularPreco(servico);

            return {
                nome: servico.nome,
                preco: precoFinal,
                duracao: servico.duracao,
                faixa: classificarServico(precoFinal)
            };

        });

        const servicosPremium = dadosProcessados.filter(function (servico) {

            return servico.faixa === "Premium";

        });

        const totalPrecos = dadosProcessados.reduce(
            function (total, servico) {

                return total + servico.preco;

            },
            0
        );

        listaResultados.replaceChildren();

        dadosProcessados.forEach(function (servico) {

            const card = document.createElement("article");

            card.classList.add("resultado-card");

            const titulo = document.createElement("h3");

            titulo.textContent = servico.nome;

            const preco = document.createElement("p");

            preco.textContent =
                `Preço: R$ ${servico.preco.toFixed(2)}`;

            const duracao = document.createElement("p");

            duracao.textContent =
                `Duração: ${servico.duracao} minutos`;

            const faixa = document.createElement("p");

            faixa.textContent =
                `Classificação: ${servico.faixa}`;

            if (servico.faixa === "Econômico") {

                card.classList.add("faixa-economica");

            } else if (servico.faixa === "Intermediário") {

                card.classList.add("faixa-intermediaria");

            } else {

                card.classList.add("faixa-premium");

            }

            card.append(titulo, preco, duracao, faixa);

            listaResultados.append(card);

        });

        const resumo = document.createElement("div");

        resumo.classList.add("resumo-resultado");

        const tituloResumo = document.createElement("h3");

        tituloResumo.textContent = "Resumo dos serviços";

        const quantidade = document.createElement("p");

        quantidade.textContent =
            `Quantidade de serviços: ${dadosProcessados.length}`;

        const total = document.createElement("p");

        total.textContent =
            `Soma dos preços: R$ ${totalPrecos.toFixed(2)}`;

        const quantidadePremium = document.createElement("p");

        quantidadePremium.textContent =
            `Serviços premium: ${servicosPremium.length}`;

        resumo.append(
            tituloResumo,
            quantidade,
            total,
            quantidadePremium
        );

        listaResultados.append(resumo);

        // Exibe também os dados no console.

        console.table(dadosProcessados);

        console.log("Serviços premium:");

        console.table(servicosPremium);

    }

    const video = document.createElement("video");

    console.log(
        "Suporte MP4:",
        video.canPlayType('video/mp4; codecs="avc1.42E01E"')
    );

    console.log(
        "Suporte WebM:",
        video.canPlayType("video/webm")
    );

})();
