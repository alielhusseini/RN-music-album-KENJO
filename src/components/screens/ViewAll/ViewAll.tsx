import { View, Text, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS } from '../../../assets/colors'
import { ScaledSheet } from 'react-native-size-matters'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { ViewAllHeader } from '../../shared/ViewAllHeader/ViewAllHeader'

export function ViewAll() {

    return (

        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <ViewAllHeader />
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