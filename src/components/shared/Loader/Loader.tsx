import { View, ActivityIndicator } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { styles } from './Loader.styles'
import { COLORS } from '../../../assets/colors'

export function Loader({ show, children }: PropsWithChildren<{ show: boolean }>) {

    if (show) return <View style={styles.container}><ActivityIndicator size={"large"} color={COLORS.white} /></View>

    return <>
        {children}
    </>
}