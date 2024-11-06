function primos(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {   
        if (numero % i === 0) return false; 
    }
    return true;
}

function primosAteNumero(maxNumero) {
    const primosArray = [];
    for (let i = 2; i <= maxNumero; i++) {
        if (primos(i)) {
            primosArray.push(i);  
        }
    }
    return primosArray;
}

module.exports = { primos, primosAteNumero };