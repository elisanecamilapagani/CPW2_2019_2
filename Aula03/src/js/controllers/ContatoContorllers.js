class  ContatoControllers {

constructor(contatos) { 

 this.contatos = contatos;
 this.contatosFiltrados = contatos;

}

 salvar(contato) {
    
     
        this.contatos.push(contato);
        this.contatosFiltrados.push(contato);
    }

    filtrar(filtro) {
             
        if(this.contatos.length > 0) {
            this.contatosFiltrados = this.contatos.filter(function (contato) {
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
       }   
      return this.contatosFiltrados;
    
 }

 recuperarTodos( )  {
     return this.contatosFiltrados;
 }
}