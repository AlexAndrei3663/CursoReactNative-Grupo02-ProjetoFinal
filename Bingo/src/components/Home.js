import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";



export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.tituloBox} >
                <Text style={styles.titulo} >BINGO</Text>
            </View>
            <Pressable 
                style={styles.botao}
                onPress={() => navigation.push('Bingo')}>
                <Text style={styles.textoBotao} > Novo Jogo </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tituloBox: {
        marginTop: 160,
        margin: 30,
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderWidth: 5,
        borderStyle: "dashed",

    },
    titulo: {
        fontSize: 84,
        fontWeight: "bold",
        color: "black",
    },
    botao: {
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 64,
        marginTop: 100,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#191970',
        width: "80%",
    },
    textoBotao: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
