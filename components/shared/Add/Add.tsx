import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Add.styles'

export function Add() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}