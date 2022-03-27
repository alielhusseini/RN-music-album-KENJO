import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useState, useEffect, useRef } from 'react'
import { IAlbum } from '../../../../data/data.types'
import { styles } from './AlbumDetailCard.styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getArtist } from '../../../../api'


export function AlbumDetailCard({ _id, title, artistId, coverUrl, year, genre }: IAlbum) {

    const controller = useRef(new AbortController());
    const [name, setName] = useState<string>('');
    const navigation = useNavigation<NativeStackNavigationProp<{ Details: { _id: string } }, 'Details'>>()

    const handleNavigationDetailedInfo = useCallback(() => {
        navigation.push('Details', { _id: _id as string })
    }, [navigation])

    const fetchName = useCallback(async () => {
        try {
            const { data: { name } } = await getArtist({ id: artistId, controller: controller.current })
            setName(name)
        } catch (err: any) {
            //
        }
    }, [])

    useEffect(() => {
        fetchName()
        return () => controller.current.abort()
    }, [])

    return (
        <TouchableOpacity onPress={handleNavigationDetailedInfo} style={styles.cardContainer}>
            <Image
                source={{ uri: coverUrl ? coverUrl : 'https://japantravel.navitime.com/static/parche/20220323-1/images/atomic-design/pc/component/noimage-article.png' }}
                resizeMode="cover"
                style={styles.albumCover}
            />
            <View style={styles.albumInfoContainer}>
                <View style={styles.mainInfoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.artist}>{name}</Text>
                </View>
            </View>
            <View style={styles.addiontalInfoContainer}>
                <Text style={styles.addiontalInfoText}>{genre}/</Text>
                <Text style={styles.addiontalInfoText}>{year}</Text>
            </View>
        </TouchableOpacity>
    )
}