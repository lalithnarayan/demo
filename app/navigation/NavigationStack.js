import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'app/screens/Login';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none' 
  },
);

export default createAppContainer(RNApp);
