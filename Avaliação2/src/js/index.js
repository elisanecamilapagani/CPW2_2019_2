function exibirLembrete() {
    let lembrete= document.getElementById('lembrete').value;
    let resposta=document.getElementById('meusLembretes');
    let paragrafo=document.createElement('p'); 
    paragrafo.innerText=lembrete;
    resposta.appendChild(paragrafo);
}