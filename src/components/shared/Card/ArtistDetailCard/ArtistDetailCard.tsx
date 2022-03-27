import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { IArtist } from '../../../../data/data.types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './ArtistDetailCard.styles'

export function ArtistDetailCard({ _id, name, photoUrl, birthdate, deathDate }: IArtist) {

    const navigation = useNavigation<NativeStackNavigationProp<{ Details: { _id: string } }, 'Details'>>()

    const handleNavigationDetailedInfo = useCallback(() => {
        navigation.push('Details', { _id: _id as string })
    }, [navigation])

    return (
        <TouchableOpacity onPress={handleNavigationDetailedInfo} style={styles.cardContainer}>
            <Image
                source={{ uri: photoUrl ? photoUrl : 'https://japantravel.navitime.com/static/parche/20220323-1/images/atomic-design/pc/component/noimage-article.png' }}
                resizeMode="cover"
                style={styles.photoCover}
            />
            <View style={styles.addiontalInfoContainer}>
                <Text style={styles.addiontalInfoText}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}