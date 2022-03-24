import { Keyboard, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { useCallback } from 'react'
import { HomeHeader, HomeMain, HomeFooter } from '../../shared'

export function Home() {

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    return (
        <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
            <HomeHeader />
            <HomeMain />
            <HomeFooter />
        </TouchableOpacity>
    )
}