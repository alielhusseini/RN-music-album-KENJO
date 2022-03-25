import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IAlbum } from '../../../../data/data.types'
import { styles } from './AlbumCard.styles'

export function AlbumCard({ _id, title, artistId, coverUrl, year, genre }: IAlbum) {
    return (
        <TouchableOpacity style={styles.cardContainer}>
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