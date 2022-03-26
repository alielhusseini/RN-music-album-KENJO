import { View, Text } from 'react-native'
import React from 'react'
import { IEmpty } from './Empty.types'
import { styles } from './Empty.styles'

export function Empty({ tabName }: IEmpty) {

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>No {tabName}</Text>
            <Text style={styles.text}>Add new music by clicking on the music icon</Text>
        </View>
    )
}