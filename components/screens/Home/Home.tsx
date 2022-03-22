import { View, Text } from 'react-native'
import React from 'react'
import { HomeHeader, HomeMain } from '../../shared'

export function Home() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader />
            <HomeMain />
        </View>
    )
}