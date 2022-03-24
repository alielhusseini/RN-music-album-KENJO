import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IArtist } from '../../../../data/data.types'
import { styles } from './ArtistCard.styles'

export function ArtistCard({ _id, name, photoUrl, birthdate, deathDate }: IArtist) {
    return (
        <TouchableOpacity>
            <Text>ArtistCard</Text>
        </TouchableOpacity>
    )
}