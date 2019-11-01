/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
    {
        nome: 'Elisane Camila Pagani',
        telefone: '(67) 81245072',
        email: 'elisanecamila20@gmail.com',
        dataNascimento: '03/09/1996'
    },
    {
        nome: 'Eloisa Pagani',
        telefone: '(67) 9999999',
        email: 'eloisan@gmail.com',
        dataNascimento: '12/01/1994'
    },
    {
        nome: 'Raquel Pagani',
        telefone: '(67) 88888888',
        email: 'raquel@gmail.com',
        dataNascimento: '03/11/1982'
    },
    {
        nome: 'Cristiane Pagani',
        telefone: '(67) 96799077',
        email: 'cristiane@email.com',
        dataNascimento: '18/01/2000'
    },
    {
        nome: 'Geovane Pagani',
        telefone: '(67) 981345678',
        email: 'geovani@gmail.com',
        dataNascimento: '04/02/1995'
    }
];
renderizarTabelaContatos();
renderizarCardsContatos();

function salvarContato(event) {
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

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    // Invoca a renderização da tabela
    renderizarTabelaContatos();

    //invoca a renderização dos cards
    renderizarCardsContatos();
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('tabelaContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criarCabecalhoTabela();
        // Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela();
        // Adiciona o corpo da tabela na tabela
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}

function criarCabecalhoTabela() {
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

function criarCorpoTabela() {
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

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

function renderizarCardsContatos() {
  if (contatos.length > 0){
    
    let areaListagemContatos = document.getElementById("cardsContatos");

    /*
     ao em vex de usar loop laco de repeticao
     utilizamos a funcao forEach
    */
         contatos. forEach(function (contato) { 
          let card = document.createElement("div");
          let inicialNome = document.createElement('span');
          inicialNome.innerText = contato.nome.charAt(0); 
          let nome = document.createElement('span');
          let tamanhoNome = contato.nome.length; 
          nome.innerText = contato.nome.substr(1, tamanhoNome); 
          let telefone = document.createElement ("span");
          telefone.innerText = contato.telefone;
          let email = document.createElement("span");
          email.innerText = contato.email;
          let DataNascimento= document.createElement("span");
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