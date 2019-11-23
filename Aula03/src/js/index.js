/**
 * Nosso BD fake!
 * (in memory DB)
 */

// deve serguir a ondem do que foi estabelecido em  class Contato em Contato.js
let elisane = new Contato('Elisane Camila Pagani', '(67) 81245072', '03/09/1996',
    'elisanecamila20@gmail.com');
let eloisa = new Contato('Eloisa Pagani', '(67) 9999999',
    'eloisa@gmail.com', '12/01/1994');
let raquel = new Contato(' Raquel Pagani', '(67) 88888888',
    'raquel@gmail.com', '03/11/1982');
let cristiane = new Contato('Cristiane Pagani', '(67) 96799077', 'cristiane@email.com', '18/01/2000')
let geovane = new Contato('Geovane Pagani', '(67) 981345678', 'geovani@gmail.com',
    '04/02/1995')
var contatos = [
    elisane, eloisa, raquel, cristiane, geovane
];


/**
 * instancia o objeto 
 * contatosView
 */
 var contatoView = new ContatoView(contatos);
 contatoView. renderizarTabelaContatos( );
 contatoView. renderizarCardsContatos( );








