import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddMusic, Details, Home, ViewAll } from '../screens'
import { screenOptions } from './screenOptions'

const Stack = createNativeStackNavigator()

export function NavStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ViewAll" component={ViewAll} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="AddMusic" component={AddMusic} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}