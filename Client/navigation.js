import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/intro/Intro';
import TutorialScreen from './screens/tutorial/TutorialScreen';
import LoginScreen from './screens/LoginScreen';
const Stack = createNativeStackNavigator();

import React from 'react';
export default function Navigation() {
    return(
        <NavigationContainer >
                <Stack.Navigator initialRouteName="Intro" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="Tutorial" component={TutorialScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    {/* <Stack.Screen name='SignUp' component={SignUpScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
    )
}