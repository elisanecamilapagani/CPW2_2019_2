/**
 * Nosso BD fake!
 * (in memory DB)
 */
 
  // deve serguir a ondem do que foi estabelecido em  class Contato em Contato.js
 let elisane = new Contato( 'Elisane Camila Pagani',  '(67) 81245072',   '03/09/1996', 
 'elisanecamila20@gmail.com');
let eloisa = new Contato ('Eloisa Pagani', '(67) 9999999',
 'eloisa@gmail.com','12/01/1994');
 let raquel = new Contato  (' Raquel Pagani', '(67) 88888888',
   'raquel@gmail.com', '03/11/1982');
 let cristiane = new Contato ('Cristiane Pagani' ,'(67) 96799077', 'cristiane@email.com',  '18/01/2000')
 let geovane = new Contato  ( 'Geovane Pagani','(67) 981345678', 'geovani@gmail.com',
 '04/02/1995')
var contatos =  [
    elisane, eloisa, raquel, cristiane, geovane
 ];

  
 

renderizarTabelaContatos(contatos);
renderizarCardsContatos(contatos);

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
    renderizarTabelaContatos(contatos);

    //invoca a renderização dos cards
    renderizarCardsContatos(contatos);
}

function renderizarTabelaContatos(listaContatos) {
    if ( listaContatos.length > 0 ) {
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

        let corpoTabela = criarCorpoTabela(listaContatos);
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

function criarCorpoTabela( listaContatos ) {
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria a linhas de contatos
     */
    for (let i = 0; i < listaContatos.length;  i++) {
        /**
         * Cria uma nova linha no corpo da tabela
         */
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = listaContatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = listaContatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = listaContatos[i].email;
        linha.appendChild(celulaEmail);
        let celuladataNascimento = document.createElement('td');
        celuladataNascimento.innerText = listaContatos[i].dataNascimento;
        linha.appendChild(celuladataNascimento);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}

function renderizarCardsContatos(listaContatos) {
  if (listaContatos.length > 0){
    
    let areaListagemContatos = document.getElementById("cardsContatos");
 
     // limpa a aréa de listagem
    areaListagemContatos.innerHTML = " ";

    /*
     ao em vex de usar loop laco de repeticao
     utilizamos a funcao forEach
    */
        listaContatos. forEach(function (contato) { 
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

function filtrarContatos() {
    // se tiver pelo menos um contato
     if (contatos.length > 0 ){
         let filtro = document.getElementById("filtro").value;
          filtro = filtro.toLowerCase();

         /**
          * filtra os contatos de acordo com os texto 
          * digitado pelo usuário no campo de filtro
          * 
          */
           
           let contatosFiltrados = contatos.filter (function (contato) { 
               let nome = contato.nome.toLowerCase();
               let email = contato.email.toLowerCase();
               
                /**
                 * se o nome ou email do cantato conter o filtro do usuario,
                 * retorne contatos
                 */
            if (nome.includes(filtro) || email.includes(filtro)) {
                  return contatos;
               }
           });

           renderizarCardsContatos(contatosFiltrados);
           renderizarTabelaContatos(contatosFiltrados);


        }
    }