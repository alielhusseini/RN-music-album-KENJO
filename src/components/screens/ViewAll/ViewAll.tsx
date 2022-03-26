import { StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../assets/colors'
import { ScaledSheet } from 'react-native-size-matters'
import { ViewAllHeader } from '../../shared/ViewAllHeader/ViewAllHeader'
import { Footer } from '../../shared'
import { ViewAllMain } from '../../shared/ViewAllMain/ViewAllMain'

export function ViewAll() {

    return (

        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            <ViewAllHeader />
            <ViewAllMain />
            <Footer />
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