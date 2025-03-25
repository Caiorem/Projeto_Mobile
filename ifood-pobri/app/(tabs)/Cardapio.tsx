import React, { useState } from 'react';
import { Text, View, StyleSheet, useColorScheme, Image, Modal, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface Bebida {
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export default function CardapioScreen() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const bebidas: Bebida[] = [
    { nome: 'Cerveja', preco: 5.0, imagem: 'https://imgs.search.brave.com/yUqRJDEskcSc7BnIT8aDcJ2YZiB7tNH2BiQUDzpMc1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jZXJ2ZWphLWZy/ZXNjYV8xMTgwMTg3/LTE0Mi5qcGc_c2Vt/dD1haXNfaHlicmlk', descricao: 'Uma cerveja gelada para refrescar.' },
    { nome: 'Caipirinha', preco: 10.0, imagem: 'https://imgs.search.brave.com/6bnh40u77_e6zkWZNIguHFNGrbG_pqxxZUJVcjRIuK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWNzLm90dmZvY28u/Y29tLmJyLzIwMjMv/MTAvMTIwMHg2MDAt/dHZmb2NvLTIwMjMt/MTAtMDRUMDkzNzU5/LjI0Ni5wbmc', descricao: 'Uma caipirinha clássica brasileira.' },
    { nome: 'Refrigerante', preco: 3.0, imagem: 'https://imgs.search.brave.com/9PV0VmUv3aFbHXvu9_hWaY7WjMPQT66UaK5H9DB5DDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waHln/aXRhbC1maWxlcy5t/ZXJjYWZhY2lsLmNv/bS9nb3VybWV0L3Vw/bG9hZHMvcHJvZHV0/by9ndWFyYW5hX21p/bmVpcm9fbGF0YV9m/aXRfMzUwbWxfYmFk/Mjc1ZmUtZmY1OS00/YmNmLTlkM2EtY2Ey/YmZkMmMwNWZhLmpw/Zw', descricao: 'Um refrigerante gelado para acompanhar.' },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBebida, setSelectedBebida] = useState<Bebida | null>(null);

  const openModal = (bebida: Bebida) => {
    setSelectedBebida(bebida);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBebida(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'} translucent={true} />
      <Text style={styles.title}>Cardápio Bar do Tião</Text>
      <View style={styles.separator} />
      {bebidas.map((bebida, index) => (
        <TouchableOpacity key={index} onPress={() => openModal(bebida)}>
          <Image source={{ uri: bebida.imagem }} style={styles.image} />
          <Text style={styles.bebidaNome}>{bebida.nome}</Text>
          <Text style={styles.bebidaPreco}>R$ {bebida.preco.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
      {selectedBebida && (
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedBebida.imagem }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedBebida.nome}</Text>
              <Text style={styles.modalPreco}>R$ {selectedBebida.preco.toFixed(2)}</Text>
              <Text style={styles.modalDescricao}>{selectedBebida.descricao}</Text>
              <Button title="Fechar" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  bebidaNome: {
    fontSize: 18,
    color: '#000',
  },
  bebidaPreco: {
    fontSize: 16,
    color: '#000',
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  modalPreco: {
    fontSize: 20,
    color: '#000',
    fontStyle: 'italic',
  },
  modalDescricao: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#555',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  bebidaNome: {
    fontSize: 18,
    color: '#fff',
  },
  bebidaPreco: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalPreco: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
  },
  modalDescricao: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
});
