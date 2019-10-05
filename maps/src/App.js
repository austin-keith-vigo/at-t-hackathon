import React from 'react';
import {View} from 'react-native';

//Redux
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

//Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Homescreen} from './screens';

//Navigation Stack
const mainNavigator = createStackNavigator(
  {
    Home: Homescreen
  },
  {
    initalRouteName: "Home"
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
