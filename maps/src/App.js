import React from 'react';
import {View} from 'react-native';

//Redux
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const App = props => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.viewStyle}/>
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
