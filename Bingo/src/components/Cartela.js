import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


export default function Cartela(props) {

  const renderItem = ({ item }) => (
    <View style={
      item.marcado?styles.espacoCartelaMarcada:styles.espacoCartela
    }>
      {item.numero === 0 &&
        <Text style={styles.texto}>-</Text>
      }
      {item.numero != 0 &&
        <Text style={styles.texto}>
          {item.numero < 10 ? "0" + String(item.numero) : item.numero}
        </Text>
      }
    </View>

  )

  const renderColuna = ({ item }) => (
    <View style={styles.coluna}>
      <View style={styles.espacoTexto}>
        <Text style={styles.texto}>{item.letra}</Text>
      </View>
      <FlatList
        data={item.valoresColuna}
        renderItem={renderItem}
        keyExtractor={(numero) => numero.numero}
      />
    </View>

  )

  return (
    <View style={styles.container}>
      <FlatList
        data={props.cartela}
        renderItem={renderColuna}
        keyExtractor={(item) => item.letra}
        extraData={props.flagAtualizar}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  espacoCartela: {
    padding: 15,
    borderWidth: 2,
    margin: 2,
    borderRadius: 20,
  },
  espacoCartelaMarcada: {
    backgroundColor: "#8d8d8d",
    padding: 15,
    borderWidth: 2,
    margin: 2,
    borderRadius: 20,
  },
  espacoTexto: {
    padding: 15,
    borderWidth: 4,
    margin: 2,
    marginBottom: 5,
    borderRadius: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
})