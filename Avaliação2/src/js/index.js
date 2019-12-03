function exibirMensagem(){
    let lembrete= document.getElementById('lembrete').value;//pegando o valor da tag
    let resposta=document.getElementById('meusLembretes');//pegou o id da div onde vai ser inseridas
    let paragrafo=document.createElement('p'); // criando paragrafo dinamicamente
    paragrafo.innerText=lembrete;// jogando o texto do input dentro do paragrafo qyue eu criei
    resposta.appendChild(paragrafo);//adicionando paragrafo dentro da div resposta

}