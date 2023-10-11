import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import OnBoarding from './screens/OnBoarding';
// import LandingScreen from './screens/LandingScreen';
// import Register from './screens/Register';
// import Login from './screens/Login';
// import ktra0910 from './screens/ktra0910';
import SignUpScreen from './Ktra11thang10/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
         {/* <Stack.Screen name="LandingScreen" component={LandingScreen} /> */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="ktra0910" component={ktra0910} /> */}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}