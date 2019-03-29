import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Text</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('BarcodeScanner')}><Text>Press Me</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});


export default HomeScreen;