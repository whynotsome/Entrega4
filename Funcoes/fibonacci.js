const { moduleExpression } = require("@babel/types");

function fibonacci(quantidadeTermos) {
    let termo1 = 0;
    let termo2 = 1;
    let sequencia = [termo1, termo2];
    
    for (let i = 3; i <= quantidadeTermos; i++) {
        let termo3 = termo1 + termo2;
        sequencia.push(termo3);
        termo1 = termo2;
        termo2 = termo3;
    }
    
    return sequencia;
}

module.exports = fibonacci;