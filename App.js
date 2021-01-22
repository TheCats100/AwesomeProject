import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Router from './Router';
import Home from './Home';

export default function App() {
  return (
      <Router />
  );
}

