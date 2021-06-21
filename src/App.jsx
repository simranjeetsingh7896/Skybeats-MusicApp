import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from "@react-navigation/web";
import {Home} from './Components/Home';
import {Detail} from './Components/Detail';

const MyNavigation = createSwitchNavigator({
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  }
})
const App = createBrowserApp(MyNavigation);

export default App;