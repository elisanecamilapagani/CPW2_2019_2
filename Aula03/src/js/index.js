/**
 * nosso banco de dados fake
 * (in memory BD)
 */
var contatos = [];

function SalvarContatos(event){ //evintevita caregamento da pagina
    //inibe a recarga da pagina
    event.preventDefault(); 

   

/** recupera os valores do formulario.
 * $ -> document.querySletector
 * val-> value();
*/
    let nome = $("#nome").val();
    let telefone = $("#telefone").val();
    let email = $("#email").val();
    let dataNascimento = $("#dataNascimento").val();

    //criar um objeto de  contato

    let contato =
    { nome, telefone, email, dataNascimento };

    //add o contato no BD (no final do vetor)

    contatos.push(contato);

    console.log(contatos)

}
