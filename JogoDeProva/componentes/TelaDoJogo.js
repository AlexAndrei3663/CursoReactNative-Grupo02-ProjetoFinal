import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Colors, ProgressBar, Subheading, Title } from "react-native-paper";
import Resultado from "./Resultado";

export default function TelaDoJogo({navigation}) {
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
            pergunta: "O que deve ser adiocionado à linha de comando para instalar uma dependência globalmente?",
            resposta: ["sudo", "--global", "su", "Todas as alternativas"],
            respostaCerta: 1
        },
        {
            pergunta: "Pergunta 15?",
            resposta: ["Sim", "Não"],
            respostaCerta: 2
        },
        {
            pergunta: "Pergunta 16?",
            resposta: ["Sim", "Não"],
            respostaCerta: 3
        },
        {
            pergunta: "Pergunta 17?",
            resposta: ["Sim", "Não"],
            respostaCerta: 0
        },
        {
            pergunta: "Pergunta 18?",
            resposta: ["Sim", "Não"],
            respostaCerta: 1
        },
        {
            pergunta: "Pergunta 19?",
            resposta: ["Sim", "Não"],
            respostaCerta: 2
        },
        {
            pergunta: "Pergunta 20?",
            resposta: ["Sim", "Não"],
            respostaCerta: 3
        }
    ]
    const [respostas, setRespostas] = useState([])
    const [resposta10, setResposta10] = useState([])

    function sortearQuestoes() {
        let random
        let i = 9

        while(i > 0) {
            random = Math.floor(Math.random() * 20)
            
            if(!numerosSorteados.includes(random)) {
                numerosSorteados.push(random)
                return random
            }
        }
    }

    return(
        <Card style={style.container} >
            <Title style={{alignSelf: 'center', }}>Questão {numeroDaQuestao} de 10</Title>
            
            <ProgressBar
                progress={progresso}
                color={Colors.cyanA700}
                style={{width: 250, alignSelf: 'center'}}
            />
            
            <Card.Content style={{...style.container, backgroundColor: 'white', elevation: 0, }}>
                {numeroDaQuestao === 1 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[0]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[0]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[0]].resposta[1]}</Button>
                    {questoes[numerosSorteados[0]].resposta.length > 2 && <View>
                            <Button
                                style={style.botao}
                                mode="contained"
                                onPress={() => {
                                    setRespostas(resposta => [...resposta, 2])
                                    setProgresso(progresso+0.1)
                                    setNumeroDaQuestao(numeroDaQuestao+1)
                                    sortearQuestoes()
                                }}
                            >{questoes[numerosSorteados[0]].resposta[2]}</Button>
                            <Button
                                style={style.botao}
                                mode="contained"
                                onPress={() => {
                                    setRespostas(resposta => [...resposta, 3])
                                    setProgresso(progresso+0.1)
                                    setNumeroDaQuestao(numeroDaQuestao+1)
                                    sortearQuestoes()
                                }}
                            >{questoes[numerosSorteados[0]].resposta[3]}</Button>
                        </View>
                    }
                </View>}
                {numeroDaQuestao === 2 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[1]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[1]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[1]].resposta[1]}</Button>
                    {questoes[numerosSorteados[1]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[1]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[1]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 3 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[2]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[2]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[2]].resposta[1]}</Button>
                    {questoes[numerosSorteados[2]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[2]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[2]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 4 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[3]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[3]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[3]].resposta[1]}</Button>
                    {questoes[numerosSorteados[3]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[3]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[3]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 5 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[4]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[4]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[4]].resposta[1]}</Button>
                    {questoes[numerosSorteados[4]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[4]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[4]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 6 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[5]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[5]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[5]].resposta[1]}</Button>
                    {questoes[numerosSorteados[5]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[5]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[5]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 7 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[6]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[6]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[6]].resposta[1]}</Button>
                    {questoes[numerosSorteados[6]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[6]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[6]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 8 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[7]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[7]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[7]].resposta[1]}</Button>
                    {questoes[numerosSorteados[7]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[7]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[7]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 9 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[8]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                    >{questoes[numerosSorteados[8]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setProgresso(progresso+0.1)
                            setNumeroDaQuestao(numeroDaQuestao+1)
                            sortearQuestoes()
                        }}
                        >{questoes[numerosSorteados[8]].resposta[1]}</Button>
                    {questoes[numerosSorteados[8]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[8]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setProgresso(progresso+0.1)
                                setNumeroDaQuestao(numeroDaQuestao+1)
                                sortearQuestoes()
                            }}
                        >{questoes[numerosSorteados[8]].resposta[3]}</Button>
                    </View>}
                </View>}
                {numeroDaQuestao === 10 && <View>
                    <Subheading style={style.pergunta}>{questoes[numerosSorteados[9]].pergunta}</Subheading>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 0])
                            setResposta10(0)
                            setProgresso(progresso+0.1)
                        }}
                        >{questoes[numerosSorteados[9]].resposta[0]}</Button>
                    <Button
                        style={style.botao}
                        mode="contained"
                        onPress={() => {
                            setRespostas(resposta => [...resposta, 1])
                            setResposta10(1)
                            setProgresso(progresso+0.1)
                        }}
                        >{questoes[numerosSorteados[9]].resposta[1]}</Button>
                    {questoes[numerosSorteados[9]].resposta.length > 2 && <View>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 2])
                                setResposta10(1)
                                setProgresso(progresso+0.1)
                            }}
                        >{questoes[numerosSorteados[9]].resposta[2]}</Button>
                        <Button
                            style={style.botao}
                            mode="contained"
                            onPress={() => {
                                setRespostas(resposta => [...resposta, 3])
                                setResposta10(1)
                                setProgresso(progresso+0.1)
                            }}
                        >{questoes[numerosSorteados[9]].resposta[3]}</Button>
                    </View>}
                </View>}
                {progresso > 1.0 && <Resultado navigation={{navigation, respostas, resposta10, questoes, numerosSorteados}} />}
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
        shadowColor: 'red',
    },
    botao: {
        margin: 10,
        elevation: 200,
        shadowColor: '#ff4800',
        backfaceVisibility: 'hidden',
        borderRadius: 5
    },
    pergunta: {
        marginBottom: 30,
        textShadowRadius: 1
    }
})