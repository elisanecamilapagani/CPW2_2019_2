function verificaPalindromo(){

    var mensagem = '';
    let palavra = document.getElementById("palavra").value;
    palavra=palavra.toLowerCase();
    palavra = palavra.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'');
        while(palavra.indexOf(" ") != -1){
            palavra = palavra.replace(" ","");
            palavra = palavra.trim();
        }
        while(palavra.indexOf(",") != -1){
            palavra = palavra.replace(',','');
        }
        while(palavra.indexOf(".") != -1){
            palavra = palavra.replace('.','');
        }
       
        
    palavraReversa = palavra.split('').reverse().join('');
    
    if(palavra.length!=0){
        if(palavra==palavraReversa){
            mensagem = `É palíndromo: ${palavra} = ${palavraReversa}`; 
        }else{
        mensagem = `Não é palíndromo: ${palavra} é diferente da ${palavraReversa}`;
        }   
    }else{
        mensagem = '';
    }
    document.getElementById("mensagem").innerHTML = mensagem;
}

function contido(){

    var mensagem = '';
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;
    
    if(palavra1 && palavra2){
        if(palavra1.includes(palavra2)){
            mensagem = `Está contido: ${palavra1}  ${palavra2}`; 
        }else{
        mensagem = `Não está contido: ${palavra1}  ${palavra2}`;
        }   
    }else{
        mensagem = '';
    }
    document.getElementById("mensagem").innerHTML = mensagem;
}