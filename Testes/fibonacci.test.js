const fibonacci = require('../Funcoes/fibonacci');

test("Deve haver 5 termos na sequência", () => {
    const quantidadeTermos = 5;
    const result = fibonacci(quantidadeTermos);
    expect(result.length).toBe(5);
});

test("Os 2 primeiros termos da sequência devem ser 0 e 1", () => {
    const quantidadeTermos = 5;
    const result = fibonacci(quantidadeTermos);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
});