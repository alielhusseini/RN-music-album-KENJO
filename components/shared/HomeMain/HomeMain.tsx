import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HomeTitle } from './HomeTitle/HomeTitle'
import { HomeBody } from './HomeBody/HomeBody'
import { COLORS } from '../../../assets/colors'

export function HomeMain() {
    return (
        <View style={styles.container}>
            <HomeTitle />
            <HomeBody />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.light_green,
        borderRadius: 30,
        flex: 1,
    }
})