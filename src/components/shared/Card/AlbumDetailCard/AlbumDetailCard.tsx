import { View, Text } from 'react-native'
import React from 'react'
import { IAlbum } from '../../../../data/data.types'

export function AlbumDetailCard({ _id, title, artistId, coverUrl, year, genre }: IAlbum) {
    return (
        <View>
            <Text>AlbumDetailCard</Text>
        </View>
    )
}