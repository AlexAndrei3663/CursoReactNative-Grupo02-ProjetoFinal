
// Gera um array com os possíveis valores para o bingo
export function gerarNumerosSorteados() {
    let valores = []
    for (let index = 1; index <= 75; index++) {
        valores.push({
            numero: index,
            saiu: false
        })
    }
    return valores
}