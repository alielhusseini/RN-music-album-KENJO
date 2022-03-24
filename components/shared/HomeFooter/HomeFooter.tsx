import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './HomeFooter.styles'

export function HomeFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>&copy; Sounds like music.</Text>
        </View>
    )
}