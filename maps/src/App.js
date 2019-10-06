import React from 'react';
import {View} from 'react-native';
import GLOBALS from './Globals';

//Redux
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

//Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Homescreen,
  Loginscreen
} from './screens';

//Navigation Stack
const mainNavigator = createStackNavigator(
  {
    Home: Homescreen,
    Login: Loginscreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: '',
      headerStyle: {
        height: 0,
        backgroundColor: GLOBALS.COLORS.PURPLE
      },
      gesturesEnabled: false
    }
  }
);
const Navigator = createAppContainer(mainNavigator);

const App = props => {
  return (
    <Provider store={createStore(reducers)}>
      <Navigator/>
    </Provider>
  );
};

const styles = {
  viewStyle: {
    flex:1,
    backgroundColor: "#C297FC"
  }
};


export default App;
