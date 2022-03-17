import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Dialog, List, Portal, Title } from 'react-native-paper';

export default function Resultado({navigation}) {
    const [visivel, setVisivel] = useState(true)
  
    function calculaAcertos() {
        let acertos = 0
        for(let i = 0; i < 10; i++) {
            if(navigation.respostas[i] === navigation.questoes[navigation.numerosSorteados[i]].respostaCerta) {
                acertos++
            }
        }
        return acertos
    }

    function defineIcone(props, i) {       
        if(navigation.respostas[i] === navigation.questoes[navigation.numerosSorteados[i]].respostaCerta) {
            return <List.Icon {...props} icon="check" />
        } else {
            return <List.Icon {...props} icon="close" />
        }
    }

    return(
        <Portal>
            <Dialog style={style.dialogo} visible={visivel} onDismiss={() => navigation.navigation.navigate('Home')}>
                <View style={style.titulo}>
                    <Title>Acertou {calculaAcertos()} de 10</Title>
                </View>
                <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[0]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[0]].resposta[navigation.respostas[0]]}
                            left={props => defineIcone(props, 0)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[1]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[1]].resposta[navigation.respostas[1]]}
                            left={props => defineIcone(props, 1)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[2]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[2]].resposta[navigation.respostas[2]]}
                            left={props => defineIcone(props, 2)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[3]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[3]].resposta[navigation.respostas[3]]}
                            left={props => defineIcone(props, 3)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[4]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[4]].resposta[navigation.respostas[4]]}
                            left={props => defineIcone(props, 4)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[5]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[5]].resposta[navigation.respostas[5]]}
                            left={props => defineIcone(props, 5)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[6]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[6]].resposta[navigation.respostas[6]]}
                            left={props => defineIcone(props, 6)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[7]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[7]].resposta[navigation.respostas[7]]}
                            left={props => defineIcone(props, 7)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[8]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[8]].resposta[navigation.respostas[8]]}
                            left={props => defineIcone(props, 8)}
                        />
                        <List.Item
                            style={style.lista}
                            title={navigation.questoes[navigation.numerosSorteados[9]].pergunta}
                            description={navigation.questoes[navigation.numerosSorteados[9]].resposta[navigation.respostas[9]]}
                            left={props => {
                                if(navigation.resposta10 === navigation.questoes[9].respostaCerta) {
                                    return <List.Icon {...props} icon="check" />
                                } else {
                                    return <List.Icon {...props} icon="close" />
                                }
                            }}
                        />                    
                    </ScrollView>
                    <Dialog.Actions>
                        <Button onPress={() => navigation.navigation.navigate('Home')}>Ok</Button>
                    </Dialog.Actions>
                </Dialog.ScrollArea>
            </Dialog>
        </Portal>
    )
}

const style = StyleSheet.create({
    titulo: {
        alignSelf: 'center',
        height: 40,
    },
    dialogo: {
        backgroundColor: 'orange',
        maxHeight: 700,
        borderRadius: 10
    },
    lista: {
        marginLeft: -30,
    }
})
