import React, { PureComponent } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";

class NumberInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onChange = value => {
    this.setState({ value });
  };

  onSubmit = value => {
    this.props.logData(value);
    this.setState({ value: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType="number-pad"
          value={this.state.value}
          onChangeText={value => this.onChange(value)}
          maxLength={3}
          placeholder="Input weight in kg"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onSubmit(this.state.value)}
        >
          <Text>Submit {this.props.userDetail}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  input: { backgroundColor: "white", height: "100%", flex: 4 / 5 },
  button: { flex: 1 / 5, backgroundColor: "green" }
});

export default NumberInput;
