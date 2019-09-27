function exibirMensagem() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let mensagem = nome&&sobrenome ? `Palavras concatenadas: ${nome}${sobrenome}!` : '';

    
    document.getElementById('mensagem').innerHTML = mensagem;
        
}