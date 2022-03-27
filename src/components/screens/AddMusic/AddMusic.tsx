import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, Keyboard, GestureResponderEvent } from 'react-native'
import React, { useCallback } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS } from '../../../assets/colors'
import { AddMusicHeader, AddMusicMain, Footer } from '../../shared'

export function AddMusic() {

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                    <View>
                        <AddMusicHeader />
                        <AddMusicMain />
                        <Footer />
                    </View>
                </TouchableOpacity>
            </ScrollView>
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