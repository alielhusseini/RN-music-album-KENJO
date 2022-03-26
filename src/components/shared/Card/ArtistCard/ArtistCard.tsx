import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import { IArtist } from '../../../../data/data.types'
import { styles } from './ArtistCard.styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function ArtistCard({ _id, name, photoUrl, birthdate, deathDate }: IArtist) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: { _id: string } }, 'Details'>>()

    const handleNavigationDetailedInfo = useCallback(() => {
        navigation.push('Details', { _id: _id as string })
    }, [navigation])

    return (
        <TouchableOpacity onPress={handleNavigationDetailedInfo} style={styles.cardContainer}>
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