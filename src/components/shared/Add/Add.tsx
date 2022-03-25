import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Add.styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

export function Add() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.6}>
            <Fontisto name='music-note' style={styles.icon} />
        </TouchableOpacity>
    )
}