const { primos, primosAteNumero } = require('../Funcoes/primo');

test("Verifica se um número é primo", () => {
    expect(primos(2)).toBe(true);     
    expect(primos(3)).toBe(true);    
    expect(primos(4)).toBe(false);    
    expect(primos(20)).toBe(false);   
});

test("Retorna todos os números primos até 20", () => {
    expect(primosAteNumero(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]); 
});