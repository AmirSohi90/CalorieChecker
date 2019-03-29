import HomeScreen from './src/HomeScreen/HomeScreen';
import BarcodeScanner from './src/BarcodeScanner/BarcodeScanner';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

const MainNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  BarcodeScanner: BarcodeScanner
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey'
  }
});

export default createAppContainer(MainNavigator);