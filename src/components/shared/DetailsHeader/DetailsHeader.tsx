import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { styles } from './DetailsHeader.styles'
import { DetailsMain } from '../DetailsMain/DetailsMain'

export function DetailsHeader({ navigation }: any) {

    const handleNavigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleNavigateBack} style={styles.iconBackContainer}>
                    <SimpleLineIcons name='arrow-left' style={styles.iconBack} />
                </TouchableOpacity>
            </View>
            <ImageBackground style={styles.imageCover} resizeMode='cover' source={{ uri: 'https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg' }} />
            <DetailsMain />
        </View>
    )
}