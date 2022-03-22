import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './HomeHeader.style'

export function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.graphicsprings.com/filestorage/stencils/5f60cec39f76b3ae3ef0e9d989c28a4f.png?width=250&height=250' }}
                style={styles.imageLogo}
                resizeMode='cover'
            />
            <View style={styles.titleContainer}>
                <Text style={styles.textContainer}>Sounds like music.</Text>
            </View>
            <TouchableOpacity style={styles.avatarContainer}>
                <AntDesign name='user' style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}