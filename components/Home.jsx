import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Home = () => {
  const goToAbout = () => {
    Actions.about()
  }
  return (
    <View style={styles.container}>
      <Button 
        title="Open"
        onPress={() => Alert.alert(
          'You love blue',
          'Because you pushed the blue button !',
        )}
      />
      <Text>Ok</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;