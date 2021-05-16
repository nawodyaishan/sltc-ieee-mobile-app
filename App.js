import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView 
      source={{uri: 'https://ieee.sltc.ac.lk/'}}
      style= {{marginTop: 30, flex: 1,
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 'auto',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  justifyContent: 'center'}}
    />

  );
}