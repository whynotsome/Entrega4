const somatorio = require('../Funcoes/somatorio');

test("Calcula a soma de um array de números", () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15);          
});

test("Soma de 0 deve ser 0", () => {
    expect(somatorio([0, 0, 0, 0])).toBe(0);       
})