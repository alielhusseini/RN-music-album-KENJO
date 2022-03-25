import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { styles } from './ViewAllHeader.styles'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function ViewAllHeader() {

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
                <Text style={styles.textContainer}>View All {activeTab}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <AntDesign name='user' style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}