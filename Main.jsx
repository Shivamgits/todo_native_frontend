import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screens/Home'
import Login from './screens/Login'

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>

   <Stack.Screen name='home' component={Home}
   //upar se header mita deta hai
   options={{headerShown: false}}
   />
   <Stack.Screen name='login' component={Login} />


    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main