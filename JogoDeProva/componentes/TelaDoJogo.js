import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button, Card, Colors, ProgressBar, Subheading, Text, Title } from "react-native-paper";
import Resultado from "./Resultado";

export default function TelaDoJogo({ route, navigation }) {

    let { tema } = route.params;

    const [refresh, setRefresh] = useState(false)
    const [progresso, setProgresso] = useState(0.1)
    const [numeroDaQuestao, setNumeroDaQuestao] = useState(1)
    const [numerosSorteados, setNumerosSorteados] = useState([Math.floor(Math.random() * 20)])

    let questoes = [
        {
            pergunta: "Flamengo tem Mundial?",
            resposta: ["Óbvio que sim", "Não"],
            respostaCerta: 0
        },
        {
            pergunta: "Palmeiras tem Mundial?",
            resposta: ["Sim", "Óbvio que não"],
            respostaCerta: 1
        },
        {
            pergunta: "Onde não é possível usar Hooks?",
            resposta: ["Dentro de loops", "Em funções JavaScript", "Em funções aninhadas", "Todas as alternativas"],
            respostaCerta: 3
        },
        {
            pergunta: "Onde é possível chamar Hooks?",
            resposta: ["Em componentes React", "Em Hooks Customizados", "Todas as alternativas", "Nenhuma das alternativas"],
            respostaCerta: 2
        },
        {
            pergunta: "Qual a biblioteca utilizada para fazer a integração API?",
            resposta: ["Axios", "Expo", "React Router", "React Navigation"],
            respostaCerta: 0
        },
        {
            pergunta: "Qual o método da biblioteca Axios usado para cadastrar dados?",
            resposta: ["get", "post", "push", "append"],
            respostaCerta: 1
        },
        {
            pergunta: "Qual o método da biblioteca Axios usado para recuperar dados cadastrados?",
            resposta: ["find", "pop", "map", "get"],
            respostaCerta: 3
        },
        {
            pergunta: "Qual a biblioteca utilizada para fazer a navegação em React JS?",
            resposta: ["React Navigation", "Native Stack", "React Router", "Browser Router"],
            respostaCerta: 2
        },
        {
            pergunta: "Qual a biblioteca utilizada para fazer a navegação em React Native?",
            resposta: ["React Navigation", "Native Stack", "React Router", "Browser Router"],
            respostaCerta: 0
        },
        {
            pergunta: "O que pode ser usado para ajudar na construção da interface gráfica?",
            resposta: ["Expo", "React Native Paper", "CSS", "Todas as alternativas"],
            respostaCerta: 1
        },
        {
            pergunta: "Qual o comando usado para criar um projeto Expo?",
            resposta: ["npm start", "npx create-react-app", "expo init", "Nenhuma das alternativas"],
            respostaCerta: 2
        },
        {
            pergunta: "Qual o comando usado para instalar uma dependência?",
            resposta: ["npm i", "yarn add", "npm install", "Todas as alternativas"],
            respostaCerta: 3
        },
        {
            pergunta: "Qual o comando usado para executar a API?",
            resposta: ["npm run start-gendoc", "npm start", "npm run api", "Nenhuma das alternativas"],
            respostaCerta: 0
        },
        {
            pergunta: "O que deve ser adicionado à linha de comando para instalar uma dependência globalmente?",
            resposta: ["sudo", "--global", "su", "Todas as alternativas"],
            respostaCerta: 1
        },
        {
            pergunta: "Qual o comando usado para criar um aplicativo React?",
            resposta: ["npm create-react-app", "expo init", "npx create-react-app", "Nenhuma das alternativas"],
            respostaCerta: 2
        },
        {
            pergunta: "Para que serve o comando -g?",
            resposta: ["O comando está errado", "Abreviar o comando get", "Instalar localmente", "Instalar no raiz do sistema"],
            respostaCerta: 3
        },
        {
            pergunta: "Qual é um uso de um hook?",
            resposta: ["const [n, setN] = useState()", "const n = [1, 2, 3]"],
            respostaCerta: 0
        },
        {
            pergunta: "O useState é usado em funções e o this.setState em classes.",
            resposta: ["Verdadeiro", "Falso"],
            respostaCerta: 0
        },
        {
            pergunta: "Para que serve uma API?",
            resposta: ["Enviar requisições", "Aumentar segurança", "Comunicação entre plataformas", "Todas as alternativas"],
            respostaCerta: 3
        },
        {
            pergunta: "Qual o horói mais legal do mundo?",
            resposta: ["Batman", "Homem Aranha", "Grande Saiyaman", "Homem de Ferro"],
            respostaCerta: 2
        }
    ]
    const [respostas, setRespostas] = useState([])
    const [resposta10, setResposta10] = useState([])
    const [questaoAtual, setQuestaoAtual] = useState(questoes[numerosSorteados]) // Estado para armazenar a questão atual do jogo

    function sortearQuestoes() {
        let random
        let i = 9

        while (i > 0) {
            random = Math.floor(Math.random() * 20)

            if (!numerosSorteados.includes(random)) {
                numerosSorteados.push(random)
                break
            }
        }
        setRefresh(!refresh)
        setQuestaoAtual(questoes[random])
    }

    return (
        <Card style={style.container} >
            <Title style={{ alignSelf: 'center', }}>Questão {numeroDaQuestao} de 10</Title>

            <ProgressBar
                progress={progresso}
                color={Colors.cyanA700}
                style={{ width: 250, alignSelf: 'center' }}
            />

            <Card.Content style={{ ...style.container, elevation: 0, shadowColor: tema.backgroundColor}}>
                <Subheading style={style.pergunta}>{questaoAtual.pergunta}</Subheading>

                <Button
                    style={{...style.botao, backgroundColor: tema.backgroundColor, shadowColor: tema.backgroundColor}}
                    mode="contained"
                    onPress={() => {
                        setRespostas(resposta => [...resposta, 0])
                        setProgresso(progresso + 0.1)
                        setNumeroDaQuestao(numeroDaQuestao + 1)
                        sortearQuestoes()
                    }}
                >{questaoAtual.resposta[0]}</Button>
                <Button
                    style={{...style.botao, backgroundColor: tema.backgroundColor, shadowColor: tema.backgroundColor}}
                    mode="contained"
                    onPress={() => {
                        setRespostas(resposta => [...resposta, 1])
                        setProgresso(progresso + 0.1)
                        setNumeroDaQuestao(numeroDaQuestao + 1)
                        sortearQuestoes()
                    }}
                >{questaoAtual.resposta[1]}</Button>
                {questaoAtual.resposta.length > 2 && 
                <View>
                    <Button
                        style={{...style.botao, backgroundColor: tema.backgroundColor, shadowColor: tema.backgroundColor}}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 2])
                            setProgresso(progresso + 0.1)
                            setNumeroDaQuestao(numeroDaQuestao + 1)
                            sortearQuestoes()
                        }}
                    >{questaoAtual.resposta[2]}</Button>
                    <Button
                        style={{...style.botao, backgroundColor: tema.backgroundColor, shadowColor: tema.backgroundColor}}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 3])
                            setProgresso(progresso + 0.1)
                            setNumeroDaQuestao(numeroDaQuestao + 1)
                            sortearQuestoes()
                        }}
                    >{questaoAtual.resposta[3]}</Button>
                </View>

                }

                {progresso > 1.0 && <Resultado navigation={{ navigation, respostas, resposta10, questoes, numerosSorteados }} />}
            </Card.Content>
        </Card>
    )
}

const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 10,
        flex: 1,
        backgroundColor: 'white',
        elevation: 20,
        justifyContent: 'center',
        opacity: 5,
        borderRadius: 20,
        shadowColor: '#9e9',
    },
    botao: {
        color: 'black',
        margin: 10,
        elevation: 200,
        backfaceVisibility: 'hidden',
        shadowColor: '#9e9',
        borderRadius: 5
    },
    pergunta: {
        marginBottom: 30,
        textShadowRadius: 1,
        alignSelf: 'center'
    }
})