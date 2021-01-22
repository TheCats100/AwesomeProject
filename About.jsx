import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import urlBack from './constants/urlBack';

const About = () => {

  const goToHome = () => {
    Actions.home()
  }

  return (
    <View>
      <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
        <Text>Go back</Text>
      </TouchableOpacity>
        <Text onPress={() => getUsers()}> Try</Text>
    </View>
  )
}
export default About