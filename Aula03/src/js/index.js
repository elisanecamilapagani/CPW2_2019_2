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
        email: 'daiane@email.com',
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
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('listagemContatos');

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
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}