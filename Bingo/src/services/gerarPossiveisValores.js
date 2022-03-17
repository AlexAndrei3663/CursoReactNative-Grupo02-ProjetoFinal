
// Gera um array com os possíveis valores para o bingo
export function gerarPossiveisValores() {
    let valores = []
    for (let index = 1; index <= 75; index++) {
        valores.push(index)
    }
    return valores
}