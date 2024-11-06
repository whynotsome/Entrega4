const quicksort = require('../Funcoes/ordenacao');

test("Deve ordenar o array corretamente", () => {
    const array = [100, 50, 2, 24, 43, 213, 1, 34, 45];
    const result = quicksort(array);
    expect(result).toEqual([1, 2, 24, 34, 43, 45, 50, 100, 213]);
});

test("Deve lidar com um array já ordenado", () => {
    const array = [1, 2, 3, 4, 5];
    const result = quicksort(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});