import Contato from '../src/js/models/Contato'

test('deve gerar chaves distintas', () => {
    let contato1 = new Contato('Elisane', '99999-9999','elisane@gmail.com');
    let contato2 = new Contato('Eloisa', '8888-8888', 'eloisa@gmail.com');
    let contato3 = new Contato('Raquel', '77777-7777', 'raquel@gmail.com');
    let contato4 = new Contato('Cristiane', '66666-6666' ,'cristiane@gmail.com');
    expect(contato1.id === contato2.id ||
        contato1.id === contato3.id ||
        contato1.id === contato4.id ||
        contato2.id === contato3.id ||
        contato2.id === contato4.id ||
        contato3.id === contato4.id
    ).toBeFalsy();
});