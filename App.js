import React, { Component } from "react";
import MainNavigator from "./src/Navigation/TabNavigation";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      // Provider takes the store which holds the state
      // store stores the whole state tree of your application
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
