import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import AlterarTema from "./AlterarTema";

export default function HomeScreen({ navigation }) {
    const [tema, setTema] = useState(styles.padrao) // Variavel para guardar o tema atual 

    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                style={{ elevation: 20, borderRadius: 5, shadowColor: tema.backgroundColor, backgroundColor: tema.backgroundColor }}
                mode="contained"
                onPress={() => { 
                    navigation.navigate('Jogo de Prova', {
                        tema: tema,
                      })}}
            >Começar jogo de prova</Button>
            <AlterarTema setTema={(tema) => {setTema(tema)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    padrao: {
        backgroundColor: 'red',
    }
})