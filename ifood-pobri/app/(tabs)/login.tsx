import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Defina os tipos das rotas
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

// Defina o tipo de navegação para a tela de login
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const colorScheme = useColorScheme();

  const handleLogin = () => {
    // Simulação de login
    if (username === 'Root' && password === '1234') {
      alert('Login efetuado com sucesso');
      navigation.navigate('Home');
    } else {
      setErrorMessage('Usuário ou senha inválidos');
    }
  };

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#666'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#666'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
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
