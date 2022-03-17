
// Função para gerar uma nova cartela
export function gerarCartela() {

    // Gera um array para a cartela
    let cartela = [{
        letra: 'B',
        valoresColuna: []
    },
    {
        letra: 'I',
        valoresColuna: []
    },
    {
        letra: 'N',
        valoresColuna: []
    },
    {
        letra: 'G',
        valoresColuna: []
    },
    {
        letra: 'O',
        valoresColuna: []
    }]

    // Gera os valores para cada uma das 5 letras do BINGO
    for (let indice = 0; indice < 5; indice++) {

        // Array com 15 valores para cada opção de letra do bingo
        let numerosBingo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        // Gera 5 numeros aleatórios referente a própria letra. Ex: I - 5 entre 16 à 30
        for (let n = 0; n < 5; n++) {
            // Se for o numero central, deixa em branco
            if (cartela[indice].letra === 'N' && n === 2)
                cartela[indice].valoresColuna.push({
                    numero: 0,
                    marcado: true,
                })
            else {
                const indiceNumero = Math.floor(Math.random() * numerosBingo.length)
                cartela[indice].valoresColuna.push({
                    numero: numerosBingo[indiceNumero] + (15 * indice),
                    marcado: false,
                })
                // Remove o número sorteado das opções
                numerosBingo.splice(indiceNumero, 1)
            }
        }

    }

    return cartela
}