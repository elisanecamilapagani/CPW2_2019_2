class ListaView {

    constructor(lista,itens) {
        this.controller =
            new minhaListaController(lista);
    
        this.renderizarTabelaItens(lista);
        this.contador = 1;
        this.itens = itens;
    }

    mostrarlista(event) {
        event.preventDefault();

        let posicao = document.getElementById('item').value;
        let quantidade = document.getElementById('quantidade').value;
        let unidade = this.itens[posicao].unidade;

        let item = new Item(this.itens[posicao].descricao, unidade, quantidade);

        this.controller.salvar(item);

        this.limparFor();

        let lista = this.controller.recuperarTodos();

        // limpa a filtragem
        document.getElementById('filtroLista').value = '';

        //chamando a tabela intem
        this.renderizarTabelaItens(lista);
    }

    renderizarTabelaItens(lista) {
        let areaListagem = document.getElementById('meusProdutos');
        areaListagem.innerHTML = "";
        if (lista.length > 0) {
            document.getElementById("ListaCompras").style.display = "block";
            let tabela = document.createElement('table');
            tabela.setAttribute('id','tabelaProdutos')

            let corpoTabela = this.criarCorpoTabela(lista);
            //Adiciona o corpo(dados) da tabela na tabela
            tabela.appendChild(corpoTabela);

            //Adiciona a tabela na área de listagem
            areaListagem.appendChild(tabela);   
        }
    
    }

    criarCorpoTabela(lista) {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria as linhas de itens
         */
        for (let i = 0; i < lista.length; i++) {

            //Cria uma nova linha no corpo da tabela
            let linha = document.createElement('tr');
            linha.setAttribute('id', 'linhaProduto')
            
            let icons = document.createElement('td');
            
            //criar a imagem
             
            icons.innerHTML = '<img onclick = "listaView.checar('+i+')"id="concluido'+i+'" src="src/img/concluido.png" width="20"></img>';
            linha.appendChild(icons);

            let descricao = document.createElement('td');
            descricao.innerText = lista[i].quantidade+' '+lista[i].unidade+' de '+lista[i].descricao;
            linha.appendChild(descricao);

            let remover = document.createElement('td');

            remover.innerHTML ='<a href="#" onclick="listaView.deleteRow(\''+lista[i].descricao+'\');"><img src="src/img/iconLixo.png" width="20"></a>';
            linha.appendChild(remover);
              
            //Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }
        return corpoTabela;
    }
    
    

    limparFor() {
        [
            'item',
            'quantidade',
        ].forEach(id => document.getElementById(id).value = '');
    }
       /*
    filtrarMinhaLista() {
        let filtro = document.getElementById('filtroLista').value;
           filtro = filtroLista.toLowerCase();

        let itens = this.controller.filtrarMinhaLista(filtroLista);

        this.renderizarTabelaItens(itens);
    }
*/
    deleteRow(descricao) {
        this.controller.removerItem(descricao);
        let listaRecuperada = this.controller.recuperarTodos();
        this.renderizarTabelaItens(listaRecuperada);
    }
} 