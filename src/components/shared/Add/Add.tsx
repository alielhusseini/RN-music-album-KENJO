import { TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './Add.styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function Add() {

    const navigation = useNavigation<NativeStackNavigationProp<{ AddMusic: undefined }, 'AddMusic'>>()

    const handleNavigationToAddMusicScreen = useCallback(() => {
        navigation.push('AddMusic')
    }, [navigation])

    return (
        <TouchableOpacity onPress={handleNavigationToAddMusicScreen} style={styles.container} activeOpacity={.6}>
            <Fontisto name='music-note' style={styles.icon} />
        </TouchableOpacity>
    )
}