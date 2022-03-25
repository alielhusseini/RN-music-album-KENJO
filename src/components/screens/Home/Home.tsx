import { Keyboard, TouchableOpacity, GestureResponderEvent, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import { HomeHeader, HomeMain, HomeFooter, Add } from '../../shared'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS } from '../../../assets/colors'

export function Home() {

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    return (

        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                    <HomeHeader />
                    <HomeMain />
                    <HomeFooter />
                </TouchableOpacity>
            </ScrollView>
            <Add />
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
    },
});