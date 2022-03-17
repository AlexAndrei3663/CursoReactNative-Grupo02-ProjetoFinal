
// Função para verificar a vitória
export function verificarVitoria(cartela) {

    let bingo = true
    
    // Verifica se estão todas as casas marcadas
    for (const letra in cartela) {
        const numeroNaoMarcado = cartela[letra].valoresColuna.find(element => element.marcado === false)
        if (numeroNaoMarcado != undefined){
            bingo = false
            break
        }
    }
    
    return bingo
}