const { moduleExpression } = require("@babel/types");

function contagem(n, notas) {
    let contador = 0;
    let i = 0;

    while (i < n) {
        let nota = notas[i];

        if (nota >= 50) {
            contador += 1;
        }
        i += 1;
    }
    return contador;
}

module.exports = contagem;