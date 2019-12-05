class ContatoView {

    constructor(contatos) {
        this.controllers = new ContatoControllers( contatos);
        this.renderizarCardsContatos();
        this.renderizarTabelaContatos();

    }

    salvarContato(event) {
        // Inibe a recarga da página
        event.preventDefault();

        /**
         * $ -> document.querySelector
         * val() -> value
         */
        // Recupera os valores do formulário
        let nome = $('#nome').val();
        let telefone = $('#telefone').val();
        let email = $('#email').val();
        let dataNascimento = $('#dataNascimento').val();

        // Cria um objeto de contato
        let contato = new Contato(nome, telefone, email, dataNascimento);

        // Adiciona o contato no nosso BD (no final do vetor)

         this.controllers.salvar(contato);

        // Invoca a renderização da tabela
       this. renderizarTabelaContatos();

        //invoca a renderização dos cards
        this.renderizarCardsContatos();
    }

    renderizarTabelaContatos() {

        let contatos = this.controllers.recuperarTodos();
        if (contatos.length > 0) {
            let areaListagemContatos =
                document.getElementById('tabelaContatos');

            /**
             * Limpa a área de listagem
             */
            areaListagemContatos.innerHTML = ' ';

            /**
             * Cria a tabela
             */
            let tabela = document.createElement('table');

            let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            tabela.appendChild(cabecalho);

            let corpoTabela =this. criarCorpoTabela();
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            areaListagemContatos.appendChild(tabela);
        }
    }

    criarCabecalhoTabela() {
        /**
        * Cria o cabeçalho da tabela
        */
        let cabecalho = document.createElement('thead');
        let linhaCabecalho = document.createElement('tr');
        let colunaNome = document.createElement('th');
        colunaNome.innerText = 'Nome';
        let colunaTelefone = document.createElement('th');
        colunaTelefone.innerText = 'Telefone';
        let colunaEmail = document.createElement('th');
        colunaEmail.innerText = 'E-mail';
        let colunaDataNasc = document.createElement('th');
        colunaDataNasc.innerText = 'Data Nasc.';

        // Adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaNome);
        linhaCabecalho.appendChild(colunaTelefone);
        linhaCabecalho.appendChild(colunaEmail);
        linhaCabecalho.appendChild(colunaDataNasc);

        // Adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        // Retorna o cabeçalho criado
        return cabecalho;
    }

    criarCorpoTabela() {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        let contatos = this.controllers.recuperarTodos();

        /**
         * Cria a linhas de contatos
         */
        for (let i = 0; i < contatos.length; i++) {
            /**
             * Cria uma nova linha no corpo da tabela
             */
            let linha = document.createElement('tr');

            let celulaNome = document.createElement('td');
            celulaNome.innerText = contatos[i].nome;
            linha.appendChild(celulaNome);
            let celulaTelefone = document.createElement('td');
            celulaTelefone.innerText = contatos[i].telefone;
            linha.appendChild(celulaTelefone);
            let celulaEmail = document.createElement('td');
            celulaEmail.innerText = contatos[i].email;
            linha.appendChild(celulaEmail);
            let celuladataNascimento = document.createElement('td');
            celuladataNascimento.innerText = contatos[i].dataNascimento;
            linha.appendChild(celuladataNascimento);

            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsContatos() {

        let contatos = this.controllers.recuperarTodos();

        if (contatos.length > 0) {

            let areaListagemContatos = document.getElementById("cardsContatos");

            // limpa a aréa de listagem
            areaListagemContatos.innerHTML = " ";

            /*
             ao em vez de usar loop laco de repeticao
             utilizamos a funcao forEach
            */
            contatos.forEach(function (contato) {
                let card = document.createElement("div");
                let inicialNome = document.createElement('span');
                inicialNome.innerText = contato.nome.charAt(0);
                let nome = document.createElement('span');
                let tamanhoNome = contato.nome.length;
                nome.innerText = contato.nome.substr(1, tamanhoNome);
                let telefone = document.createElement("span");
                telefone.innerText = contato.telefone;
                let email = document.createElement("span");
                email.innerText = contato.email;
                let DataNascimento = document.createElement("span");
                dataNascimento.innerText = contato.dataNasc;

                card.appendChild(inicialNome);
                card.appendChild(nome);
                card.appendChild(telefone);
                card.appendChild(email);
                card.appendChild(DataNascimento);
                areaListagemContatos.appendChild(card);
            });

        }

    }

    filtrarContatos() {
        let filtro = document.getElementById("filtro").value;
        filtro = filtro.toLowerCase();

        /**
         * filtra os contatos de acordo com os texto 
         * digitado pelo usuário no campo de filtro
         * 
         */
        this.controllers.filtrar(filtro);

       this. renderizarCardsContatos();
      this.  renderizarTabelaContatos();
    }
}
