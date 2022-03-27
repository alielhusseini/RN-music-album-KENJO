import { Keyboard, TouchableOpacity, GestureResponderEvent, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { HomeHeader, HomeMain, Footer, Add, Error } from '../../shared'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS } from '../../../assets/colors'
import { useMusicContext } from '../../../hooks/useMusicContext'

export function Home() {

    const { isLoading, isError } = useMusicContext()

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    if (isError.error) {
        return (
            <SafeAreaView style={styles.body}>
                <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
                <Error />
            </SafeAreaView>
        )
    }

    return (

        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            {isLoading ? (
                <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                    <HomeHeader />
                    <HomeMain />
                    <Footer />
                </TouchableOpacity>
            ) : (
                <>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                            <HomeHeader />
                            <HomeMain />
                            <Footer />
                        </TouchableOpacity>
                    </ScrollView>
                    <Add />
                </>
            )}
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