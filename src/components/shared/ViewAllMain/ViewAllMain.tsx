import { View, FlatList, Text } from 'react-native'
import React, { Children } from 'react'
import { styles } from './ViewAllMain.styles'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { AlbumDetailCard, ArtistDetailCard } from '../Card'

export function ViewAllMain() {

    const { activeTab, state } = useMusicContext()

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {
                    activeTab === 'Artists' ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={state.Artists}
                            keyExtractor={(item, index) => item._id || index.toString()}
                            renderItem={({ item }) => <ArtistDetailCard {...item} />}
                        /> :
                        < FlatList
                            showsVerticalScrollIndicator={false}
                            data={state.Albums}
                            keyExtractor={(item, index) => item._id || index.toString()}
                            renderItem={({ item }) => <AlbumDetailCard {...item} />}
                        />
                }
            </View>
        </View>
    )
}