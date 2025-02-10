import React, {useState} from "react";
import { SafeAreaView } from "react-native";
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;