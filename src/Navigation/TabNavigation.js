import HomeScreen from "../HomeScreen/HomeScreen";
import BarcodeScanner from "../BarcodeScanner/BarcodeScanner";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    BarcodeScanner: BarcodeScanner
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "grey"
    }
  }
);

export default createAppContainer(MainNavigator);
