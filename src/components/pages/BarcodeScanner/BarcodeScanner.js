import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BarcodeScanner = () => {
  return (
    <View style={styles.container}>
      <Text>This is Barcode</Text>
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

export default BarcodeScanner;