import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FAB, Modal } from 'react-native-paper';
import { gerarCartela } from '../services/gerarCartela';
import { gerarNumerosSorteados } from '../services/gerarNumerosSorteados';
import { gerarPossiveisValores } from '../services/gerarPossiveisValores';
import { verificarVitoria } from '../services/verificarVitoria';
import Cartela from './Cartela';
import NumerosSorteados from './NumerosSorteados';
import Sorteio from './Sorteio';


export default function Bingo({ navigation }) {

    const [cartela, setCartela] = useState(gerarCartela()) // Cartela do bingo
    const [numerosSorteados, setNumerosSorteados] = useState(gerarNumerosSorteados()) // Números sorteados
    const [numerosPossiveis, setNumerosPossiveis] = useState(gerarPossiveisValores()) // Possíveis valores para o bingo
    const [visibilidadeModal, setVisibilidadeModal] = useState(false) // Visibilidade dos números sorteados
    const [fabState, setFabState] = useState({ open: false }) // Estado do FAB
    const [atualizaBotao, setAtualizaBotao] = useState(false) // Flag para atualizar o botão em um novo jogo
    const [atulalizaCartela, setAtualizaCartela] = useState(false) // Flag para atualizar a cartela
    const [fimDeJogo, setFimDeJogo] = useState(false)   // Flag para encerrar o jogo

    let cartelaAtualizacao = cartela  // Cartela para atualização dos números marcados
    let numerosPossiveisAtualizacao = numerosPossiveis  // Array para atualização dos números restantes
    let numerosSorteadosAtualizacao = numerosSorteados // Array para atualização dos números que já saíram

    // Controle do Modal
    const hideModal = () => setVisibilidadeModal(false)

    // Controle FAB
    const onStateChange = ({ open }) => setFabState({ open })
    const { open } = fabState

    // Função para reiniciar o jogo
    const reiniciarJogo = () => {
        setCartela(gerarCartela())
        setNumerosSorteados(gerarNumerosSorteados())
        setNumerosPossiveis(gerarPossiveisValores())
        setAtualizaBotao(!atualizaBotao)
        setFimDeJogo(false)
    }

    // Função para sortear o próximo número
    const salvarNumero = (numeroSorteado) => {

        // Adiciona o numero aos numeros sorteados
        numerosSorteadosAtualizacao[numeroSorteado - 1].saui = true
        setNumerosSorteados(numerosSorteadosAtualizacao)

        // Verifica se a cartela tem o numero sorteado
        for (const letra in cartela) {
            const numeroEncontrado = cartela[letra].valoresColuna.find(element => element.numero === numeroSorteado)
            if (numeroEncontrado != undefined) {
                const indiceNumero = cartela[letra].valoresColuna.indexOf(numeroEncontrado)
                cartelaAtualizacao[letra].valoresColuna[indiceNumero].marcado = true
                setCartela(cartelaAtualizacao)
                
                // Flag para atualizar a cartela
                setAtualizaCartela(!atulalizaCartela)
                break
            }
        }

        // Remove o numero sorteado dos números possíveis
        numerosPossiveisAtualizacao.splice(numerosPossiveisAtualizacao.indexOf(numeroSorteado), 1)


        if (verificarVitoria(cartela)) {
            // Verifica se ganhou o bingo
            Alert.alert("BINGO!!!", "Você Ganhou")
            setFimDeJogo(true)
        }
        else if (numerosPossiveis.length < 1) {
            // Se não tem mais valores possíveis, fim de jogo
            setFimDeJogo(true)
        }
    };

    return (
        <View style={styles.container}>
            <Cartela cartela={cartela} flagAtualizar={atulalizaCartela} />
            < Sorteio
                valoresRestantes={numerosPossiveis}
                flagNovoJogo={atualizaBotao}
                flagFimDeJogo={fimDeJogo}
                salvarNumero={salvarNumero}
            />
            <FAB.Group
                open={open}
                onStateChange={onStateChange}
                icon="plus"
                style={styles.fab}
                fabStyle={styles.fabStyle}
                actions={[
                    {
                        icon: 'reply',
                        label: 'Voltar',
                        onPress: () => navigation.goBack(),
                        small: false,
                    },
                    {
                        icon: 'reload',
                        label: 'Novo Jogo',
                        onPress: () => reiniciarJogo(),
                        small: false,
                    },
                    {
                        icon: 'information-outline',
                        label: 'Números Sorteados',
                        onPress: () => setVisibilidadeModal(true),
                        small: false,
                    },
                ]}
            />
            <Modal
                visible={visibilidadeModal}
                onDismiss={hideModal}
                contentContainerStyle={styles.containerStyle}
            >
                <NumerosSorteados
                    numerosSorteados={numerosSorteados} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 42,
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    fab: {
        paddingBottom: 10,
        paddingRight: 10,
    },
    fabStyle: {
        backgroundColor: "#0ee",
    },
    containerStyle: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
})
