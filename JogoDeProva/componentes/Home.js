import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import AlterarTema from "./AlterarTema";

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                style={{elevation: 20, borderRadius: 5, shadowColor: '#ff4800'}}
                mode="contained"
                onPress={() => navigation.push('Jogo de Prova')}
            >Começar jogo de prova</Button>
            <AlterarTema />
        </View>
    )
}