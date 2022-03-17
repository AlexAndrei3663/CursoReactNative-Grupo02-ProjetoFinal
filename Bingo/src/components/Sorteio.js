import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Sorteio(props) {
    const [numeroAtual, setNumeroAtual] = useState("Sortear Número") // Ultimo numero sorteado
    const [novoJogo, setNovoJogo] = useState(true)

    // Reiniciar botão
    const reiniciarBotao = () => {
        setNumeroAtual("Sortear Número")
        setNovoJogo(props.flagNovoJogo)
    }

    // Função para sortear o próximo número
    const sortear = () => {
        if (props.valoresRestantes.length < 1) {
            setNumeroAtual("Sortear Número")
            Alert.alert("Não é possível sortear um numero")
        }
        else {
            const indiceSorteado = Math.floor(Math.random() * props.valoresRestantes.length)
            setNumeroAtual(props.valoresRestantes[indiceSorteado])
            props.salvarNumero(props.valoresRestantes[indiceSorteado])
        }
    }

    return (
        <View style={styles.sortear}>
            {props.flagNovoJogo != novoJogo && reiniciarBotao() }
            <Pressable style={styles.botaoSorteio} disabled={props.flagFimDeJogo} onPress={sortear}>
                <Text style={styles.textoBotao}>{numeroAtual < 10 ? "0" + String(numeroAtual) : numeroAtual}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    sortear: {
        flex: 0.2,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    botaoSorteio: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 36,
        borderRadius: 65,
        elevation: 3,
        backgroundColor: '#191970',
    },
    textoBotao: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});