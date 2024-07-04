import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homescreen';
import HomeScreen2 from './homescreen2';
import Analysis from './analysis';
import Predictions from './predictions';
import Report from './report';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Analysis" component={Analysis} options={{ headerShown: false }}/>
        <Stack.Screen name="Report" component={Report} options={{ headerShown: false }}/>
        <Stack.Screen name="Predictions" component={Predictions} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
