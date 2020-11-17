  export default class Contato{
     /**
      * Ao contruir um novo objeto 
      * contato, devem ser informado o nome, telefone
      * email, e dat de nascimento do novo contato.
      * @param {*} nome  nome  Nome do contato
      * @param {*} telefone   telefone Telefone do contato
      * @param {*} email  email  Email do contato
      * @param {*} dataNascimento  dataNascimento  dta de nascimento do contato
      */
    constructor ( nome, telefone, email, dataNascimento)   {
        
        //estou me referindo ao nome desse objeto que está sendo construido aqui (this).
        this.id = this.gerarIdAleatorio();
        this.nome = nome ;
        this.telefone = telefone;
        this.email = email ;
        this.dataNascimento = dataNascimento ;


    }
  
    gerarIdAleatorio() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const quantidadeCaracteres = caracteres.length;
        let chave = '';
        for (let i = 0; i < 16; i++) {
            chave += caracteres.charAt(Math.floor(Math.random() * quantidadeCaracteres));
        }
        return chave;
    }



}
