import { Text, View,StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function HomeScreen(){
  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor="#000" translucent={true} />
      <Text style={styles.title}>Cardápio Bar do Tião</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
