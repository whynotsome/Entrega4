const contagem = require('../Funcoes/contagem');

test("Notas acima de 50 devem dar igual a 3", () => {
    const n = 5;
    const notas = [1, 2, 51, 52, 53];
    const result = contagem(n, notas);
    expect(result).toBe(3);
});

test("O contador deve ficar em 2 por apenas 2 notas maiores que 50", () => {
  const n = 5;
  const notas = [1, 2, 3, 51, 52];
  const result = contagem(n, notas);
  expect(result).toBe(2);
});