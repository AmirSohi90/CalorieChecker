import React, { Component } from "react";
import MainNavigator from "./src/Navigation/TabNavigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

class App extends Component {
  render() {
    return (
      // Provider takes the store which holds the state
      // store stores the whole state tree of your application
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
