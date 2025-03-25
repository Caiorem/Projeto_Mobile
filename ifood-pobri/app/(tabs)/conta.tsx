import React from 'react';
import { View, Text, Button, StyleSheet, useColorScheme } from 'react-native';

export default function ContaScreen() {
  const bebidas = [
    { nome: 'Cerveja', preco: 5.0 },
    { nome: 'Caipirinha', preco: 10.0 },
    { nome: 'Refrigerante', preco: 3.0 },
  ];

  const valorTotal = bebidas.reduce((total, bebida) => total + bebida.preco, 0);

  const handleFecharConta = () => {
    // Lógica para fechar a conta
    alert('Conta fechada!');
  };

  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bar do Tião</Text>
      {bebidas.map((bebida, index) => (
        <View key={index} style={styles.bebidaContainer}>
          <Text style={styles.bebidaNome}>{bebida.nome}</Text>
          <Text style={styles.bebidaPreco}>R$ {bebida.preco.toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.total}>Valor Total: R$ {valorTotal.toFixed(2)}</Text>
      <Button title="Fechar Conta" onPress={handleFecharConta} />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000',
  },
  bebidaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bebidaNome: {
    fontSize: 18,
    color: '#000',
  },
  bebidaPreco: {
    fontSize: 18,
    color: '#000',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 24,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  bebidaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  bebidaNome: {
    fontSize: 18,
    color: '#fff',
  },
  bebidaPreco: {
    fontSize: 18,
    color: '#fff',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 24,
    color: '#fff',
  },
});
