import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { compose } from "redux";
import UserDetailsHoc from "./UserDetailsHoc";
import NumberInput from "../../atoms/NumberInput/NumberInput";

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("STATE", this.state);
    return (
      <View style={styles.container}>
        {console.log("PROPS", this.props)}
        <View
          style={{
            flex: 1 / 8,
            backgroundColor: "blue"
          }}
        >
          <NumberInput logData={this.props.logWeight} userDetail="weight" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center"
  }
});

export default compose(UserDetailsHoc)(UserDetails);
