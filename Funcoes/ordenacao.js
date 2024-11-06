function quicksort(array, comeco = 0, fim = array.length - 1) {
    if (comeco < fim) {
        let index = organizacao(array, comeco, fim);
        quicksort(array, comeco, index - 1); 
        quicksort(array, index + 1, fim); 
    }
    return array;
}

function organizacao(array, comeco, fim) {
    let pivo = array[fim];
    let indexMenores = comeco - 1;  

    for (let atual = comeco; atual < fim; atual++) {
        if (array[atual] <= pivo) {
            indexMenores++;
            [array[indexMenores], array[atual]] = [array[atual], array[indexMenores]];
        }
    }

    [array[indexMenores + 1], array[fim]] = [array[fim], array[indexMenores + 1]]; 

    return indexMenores + 1;
}

module.exports = quicksort;