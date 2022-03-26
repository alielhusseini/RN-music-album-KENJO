import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { styles } from './DetailsHeader.styles'
import { DetailsMain } from '../DetailsMain/DetailsMain'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { getAlbum, getArtist } from '../../../api'
import { IAlbum, IArtist } from '../../../data/data.types'

const controller = new AbortController()

export function DetailsHeader({ navigation, _id }: { navigation: NativeStackNavigationProp<{ Details: { _id: string } }, "Details">, _id: string }) {

    const { activeTab } = useMusicContext()
    const [data, setData] = useState<IArtist | IAlbum | null>(null)
    const handleNavigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const fetch = async () => {
        try {
            // I could have got from the state[activeTab][_id] to get a specific artist/album but since you gave me an API, I used it
            const { data: dataRecieved } = activeTab === 'Albums' ? await getAlbum({ id: _id, controller }) : await getArtist({ id: _id, controller })
            setData(dataRecieved)
        } catch (err: any) {
            //
        }
    }

    useEffect(() => {
        fetch()
        return () => controller.abort()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleNavigateBack} style={styles.iconBackContainer}>
                    <SimpleLineIcons name='arrow-left' style={styles.iconBack} />
                </TouchableOpacity>
            </View>
            <ImageBackground style={styles.imageCover} resizeMode='cover' source={{ uri: 'https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg' }} />
            <DetailsMain />
        </View>
    )
}