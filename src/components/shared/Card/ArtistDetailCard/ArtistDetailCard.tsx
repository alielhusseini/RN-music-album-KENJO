import { View, Text } from 'react-native'
import React from 'react'
import { IArtist } from '../../../../data/data.types'

export function ArtistDetailCard({ _id, name, photoUrl, birthdate, deathDate }: IArtist) {
    return (
        <View>
            <Text>ArtistDetailCard</Text>
        </View>
    )
}