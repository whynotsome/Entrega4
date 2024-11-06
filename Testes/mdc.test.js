const calcularMDC = require('../Funcoes/mdc');

test("Deve calcular o MDC de 21 e 7 como 7", () => {
    const resultado = calcularMDC(21, 7);
    expect(resultado).toBe(7);
});

test("Deve calcular o MDC de 17 e 13 como 1 (números primos entre si)", () => {
    const resultado = calcularMDC(17, 13);
    expect(resultado).toBe(1);
});