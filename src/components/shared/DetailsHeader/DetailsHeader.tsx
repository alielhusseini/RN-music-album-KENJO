import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { styles } from './DetailsHeader.styles'
import { DetailsMain } from '../DetailsMain/DetailsMain'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { getAlbum, getArtist } from '../../../api'
import { IAlbum, IArtist } from '../../../data/data.types'


export function DetailsHeader({ navigation, _id }: { navigation: NativeStackNavigationProp<{ Details: { _id: string } }, "Details">, _id: string }) {

    const controller = useRef(new AbortController())
    const { activeTab } = useMusicContext()
    const [data, setData] = useState<IArtist | IAlbum | null>(null)
    const handleNavigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const fetch = async () => {
        try {
            // I could have got from the state[activeTab][_id] to get a specific artist/album but since you gave me an API, I used it
            const { data: dataRecieved } = activeTab === 'Albums' ? await getAlbum({ id: _id, controller: controller.current }) : await getArtist({ id: _id, controller: controller.current })
            setData(dataRecieved)
        } catch (err: any) {
            //
        }
    }

    useEffect(() => {
        fetch()
        return () => controller.current.abort()
    }, [])

    const backgroundImageGenerator = useCallback((data) => {
        if (!data) return { uri: 'https://japantravel.navitime.com/static/parche/20220323-1/images/atomic-design/pc/component/noimage-article.png' }

        if (activeTab === 'Albums') {
            data as IAlbum
            return { uri: data.coverUrl }
        }
        else {
            data as IArtist
            return { uri: data.photoUrl }
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleNavigateBack} style={styles.iconBackContainer}>
                    <SimpleLineIcons name='arrow-left' style={styles.iconBack} />
                </TouchableOpacity>
            </View>
            <ImageBackground style={styles.imageCover} resizeMode='cover' source={backgroundImageGenerator(data)} />
            {data && <DetailsMain data={data} />}
        </View>
    )
}