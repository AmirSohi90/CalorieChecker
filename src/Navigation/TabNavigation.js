import HomeScreen from "../components/pages/HomeScreen/HomeScreen";
import BarcodeScanner from "../components/pages/BarcodeScanner/BarcodeScanner";
import UserDetails from "../components/pages/UserDetails/UserDetails";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    "User Details": UserDetails,
    "Barcode Scanner": BarcodeScanner
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "grey"
    }
  }
);

export default createAppContainer(MainNavigator);
