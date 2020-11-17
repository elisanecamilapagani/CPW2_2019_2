import ContatoControllers  from '../src/js/controllers/ContatoControllers'

test(' deve adicionar um novo contato', () =>{
    let contatoCtrl = new ContatoControllers( );
    let contato= contatoCtrl.adicionar('Elisane', '(00) 00000-0000', 'elisane@gmail.com');
    expect(contato.nome).toBe('Elisane');
    expect(contato.telefone).toBe('(00) 00000-0000');
    expect(contato.email).toBe('elisane@gmail.com');
});


