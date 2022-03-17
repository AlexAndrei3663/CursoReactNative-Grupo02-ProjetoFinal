import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function NumerosSorteados(props) {

  const renderItem = ({ item }) => (
    <View style={item.saui? styles.itemRemovido : styles.item}>
      <Text style={item.saui? styles.numeroRemovido : styles.numero}>
        {item.numero < 10 ? "0" + String(item.numero) : item.numero}</Text>
    </View>
  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Números Sorteados</Text>
      <FlatList
        data={props.numerosSorteados}
        renderItem={renderItem}
        numColumns={8}
        keyExtractor={(item) => (item.numero)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  item: {
    borderRadius: 45,
    borderWidth: 2,
    margin: 4,
    padding:7,
  },
  itemRemovido: {
    borderRadius: 45,
    borderWidth: 2,
    margin: 4,
    padding:7,
    backgroundColor: "#d00"
  },
  numero: {
    color: 'black',
    fontSize: 12,
  },
  numeroRemovido: {
    color: 'white',
    fontSize: 12,
  },
});