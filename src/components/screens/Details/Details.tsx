import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { PropType } from './Details.types';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../../assets/colors';
import { DetailsHeader } from '../../shared';

export function Details({ route, navigation }: PropType) {

    const { _id } = route.params;

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <DetailsHeader _id={_id} navigation={navigation} />
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