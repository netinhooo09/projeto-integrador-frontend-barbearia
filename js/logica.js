(function () {

    const servicos = [
        {
            nome: "Corte de cabelo",
            preco: 30,
            categoria: "cabelo"
        },
        {
            nome: "Barba",
            preco: 20,
            categoria: "barba"
        },
        {
            nome: "Corte + Barba",
            preco: 45,
            categoria: "combo"
        },
        {
            nome: "Sobrancelha",
            preco: 15,
            categoria: "acabamento"
        },
        {
            nome: "Hidratação",
            preco: 40,
            categoria: "tratamento"
        }
    ];

    function classificarPreco(preco) {

        if (preco <= 25) {
            return "Econômico";
        } else if (preco <= 35) {
            return "Intermediário";
        } else {
            return "Premium";
        }

    }

    function identificarCategoria(categoria) {

        switch (categoria) {

            case "cabelo":
                return "Serviço de cabelo";

            case "barba":
                return "Serviço de barba";

            case "combo":
                return "Combo de serviços";

            case "acabamento":
                return "Serviço de acabamento";

            case "tratamento":
                return "Tratamento capilar";

            default:
                return "Categoria não identificada";

        }

    }

    const botao = document.querySelector("#botao-logica");

    if (botao !== null) {

        botao.addEventListener("click", executarAnalise);

    }

    function executarAnalise() {

        const entrada = prompt(
            "Digite um preço mínimo para a análise dos serviços (0 a 200):"
        );

        if (entrada === null) {
            alert("Análise cancelada.");
            return;
        }

        if (entrada.trim() === "") {
            alert("Você precisa digitar um valor.");
            return;
        }

        const precoMinimo = Number(entrada);

        if (Number.isNaN(precoMinimo)) {
            alert("Digite somente números.");
            return;
        }

        if (precoMinimo < 0 || precoMinimo > 200) {
            alert("Digite um valor entre 0 e 200.");
            return;
        }

        let quantidadeServicos = 0;
        let somaPrecos = 0;
        let maiorPreco = 0;

        const relatorio = [];

        for (const servico of servicos) {

            quantidadeServicos++;

            somaPrecos += servico.preco;

            if (servico.preco > maiorPreco) {
                maiorPreco = servico.preco;
            }

            const faixa = classificarPreco(servico.preco);

            const descricao = identificarCategoria(servico.categoria);

            relatorio.push({
                nome: servico.nome,
                preco: servico.preco,
                faixa: faixa,
                categoria: descricao
            });

        }

        const encontrados = servicos.filter(function (servico) {
            return servico.preco >= precoMinimo;
        });

        const media = somaPrecos / quantidadeServicos;

        console.log("RELATÓRIO DA BARBEARIA DO SEU ZÉ");

        console.table(relatorio);

        console.log(`Quantidade de serviços: ${quantidadeServicos}`);

        console.log(`Soma dos preços: R$ ${somaPrecos.toFixed(2)}`);

        console.log(`Preço médio: R$ ${media.toFixed(2)}`);

        console.log(`Maior preço: R$ ${maiorPreco.toFixed(2)}`);

        console.log(
            `Serviços com preço a partir de R$ ${precoMinimo.toFixed(2)}:`
        );

        console.table(encontrados);

        alert(
            `Análise concluída!\n\n` +
            `Serviços cadastrados: ${quantidadeServicos}\n` +
            `Soma dos preços: R$ ${somaPrecos.toFixed(2)}\n` +
            `Preço médio: R$ ${media.toFixed(2)}\n` +
            `Maior preço: R$ ${maiorPreco.toFixed(2)}\n` +
            `Serviços encontrados: ${encontrados.length}`
        );

        let comando = prompt(
            "Digite continuar para consultar novamente ou sair para encerrar:"
        );

        while (comando !== null && comando.toLowerCase() !== "sair") {

            alert("Você digitou: " + comando);

            comando = prompt(
                "Digite continuar para continuar ou sair para encerrar:"
            );

        }

        console.log("Análise finalizada.");

    }

})();
