import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IArtist } from '../../../../data/data.types'
import { styles } from './ArtistCard.styles'

export function ArtistCard({ _id, name, photoUrl, birthdate, deathDate }: IArtist) {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Image
                source={{ uri: photoUrl }}
                resizeMode='cover'
                style={styles.photoCover}
            />
            <View style={styles.artistInfoContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}