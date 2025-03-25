import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme  } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
  },
  bebidaPreco: {
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 24,
  },
});

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
    marginBottom: 24,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#000',
  },
  error: {
    color: 'red',
    marginBottom: 16,
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
    marginBottom: 24,
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    color: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
