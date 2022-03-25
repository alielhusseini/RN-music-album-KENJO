import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './ViewAllMain.styles'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { data } from '../../../data/data'
import { AlbumDetailCard, ArtistDetailCard } from '../Card'

export function ViewAllMain() {

    const { activeTab } = useMusicContext()

    return (
        <View style={styles.container}>
            <View>
                {
                    activeTab === 'Artists' ?
                        < FlatList
                            showsVerticalScrollIndicator={false}
                            data={data.Artists}
                            keyExtractor={(item, index) => item._id || index.toString()}
                            renderItem={({ item }) => <ArtistDetailCard {...item} />}
                        /> :
                        < FlatList
                            showsVerticalScrollIndicator={false}
                            data={data.Albums}
                            keyExtractor={(item, index) => item._id || index.toString()}
                            renderItem={({ item }) => <AlbumDetailCard {...item} />}
                        />
                }
            </View>
        </View>
    )
}