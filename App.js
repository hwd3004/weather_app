import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.temp01}><Text style={styles.text}>temp01</Text></View>
      <View style={styles.temp02}><Text style={styles.text}>temp02</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  temp01: {
    flex: 1,
    backgroundColor: 'lightyellow'
  },
  temp02: {
    flex: 3,
    backgroundColor: 'skyblue'
  },
  text: {
    color: 'black'
  }
});
