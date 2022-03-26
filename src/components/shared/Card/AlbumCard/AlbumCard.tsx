import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import { IAlbum } from '../../../../data/data.types'
import { styles } from './AlbumCard.styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export function AlbumCard({ _id, title, artistId, coverUrl, year, genre }: IAlbum) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: { _id: string } }, 'Details'>>()

    const handleNavigationDetailedInfo = useCallback(() => {
        navigation.push('Details', { _id: _id as string })
    }, [navigation])

    return (
        <TouchableOpacity onPress={handleNavigationDetailedInfo} style={styles.cardContainer}>
            <Image
                source={{ uri: coverUrl }}
                resizeMode="cover"
                style={styles.albumCover}
            />
            <View style={styles.albumInfoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artistId}</Text>
                <View style={styles.addiontalInfoContainer}>
                    <Text style={styles.addiontalInfoText}>{genre}</Text>
                    <Text style={styles.addiontalInfoText}>{year}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}