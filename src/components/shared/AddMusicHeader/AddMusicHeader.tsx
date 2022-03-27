import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './AddMusicHeader.styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export function AddMusicHeader() {
    const { activeTab } = useMusicContext()
    const navigation = useNavigation<NativeStackNavigationProp<{ Home: undefined }, 'Home'>>()

    const handleNavigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack} style={styles.iconBackContainer}>
                <SimpleLineIcons name='arrow-left' style={styles.iconBack} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.textContainer}>Add New {activeTab === 'Albums' ? 'Album' : 'Artist'}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <AntDesign name='user' style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}