import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {store} from './app/configureStore';

import LaunchScreen from './app/views/launches';
import RocketDetailsScreen from './app/views/rocketdetails';

console.disableYellowBox = true;
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Launches"
            screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="Launches" component={LaunchScreen} />
            <Stack.Screen
              name="RocketDetails"
              component={RocketDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
