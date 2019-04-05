import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { compose } from "redux";
import HomeScreenHoc from "./HomeScreenHoc";

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      {console.log(props)}
      <Text>This is Text</Text>
      <TouchableOpacity onPress={() => props.logWeight(12)}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <Text>{props.userWeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default compose(HomeScreenHoc)(HomeScreen);
