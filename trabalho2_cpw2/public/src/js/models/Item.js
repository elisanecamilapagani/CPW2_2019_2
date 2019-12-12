class Item {
   
    /**
     * novo objeto da Lista, deve conter o produto e 
     * a quantidade do novo item.
     * @param {*} item Nome do produto
     * @param {*} unidade Un do produto
     * @param {*} quantidade Quant do produto
     * */
    constructor(item, unidade, quantidade){
      
        this.descricao = item;
        this.unidade =unidade;
        this.quantidade = quantidade;
    }
}
