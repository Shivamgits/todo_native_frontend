import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screens/Home'
import Login from './screens/Login'
import Footer from './components/Footer'
import Profile from './screens/Profile'
import Register from './screens/Register'
import Camera from './screens/Camera'

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>

   <Stack.Screen name='home' component={Home}
   //upar se header mita deta hai
   options={{headerShown: false}}
   />
   <Stack.Screen name='login' component={Login} options={{headerShown: false}} />
   <Stack.Screen name='register' component={Register} options={{headerShown: false}} />
   <Stack.Screen name='camera' component={Camera} options={{headerShown: false}} />
   <Stack.Screen name='profile' component={Profile} options={{headerShown: false}} />


    </Stack.Navigator>
    <Footer/>
   </NavigationContainer>
  )
}

export default Main