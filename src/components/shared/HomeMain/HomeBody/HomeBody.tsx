import { View, Text, TouchableOpacity, FlatList, GestureResponderEvent } from 'react-native'
import React, { useCallback } from 'react'
import { data } from '../../../../data/data'
import { styles } from './HomeBody.styles'
import { AlbumCard, ArtistCard } from '../../Card'
import { useMusicContext } from '../../../../hooks/useMusicContext'
import { TabType } from '../../../providers/Music/MusicProvider.types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const isButtonActiveFunction = (isButtonActive: string, checkedValue: string) => {
    return isButtonActive === checkedValue ? [styles.button, styles.buttonActive] : styles.button
}

export function HomeBody() {

    const { switchTab, activeTab } = useMusicContext()
    const navigation = useNavigation<NativeStackNavigationProp<{ ViewAll: undefined }, 'ViewAll'>>()

    // This is a closure, purposely made to re-use the handleButtonPress functionality without creating n number of functions that do the same thing just have the setter function parameter changed
    const handleButtonPress = useCallback((tabName: TabType) => {

        const eventHandler = (event: GestureResponderEvent) => {
            switchTab(tabName);
        };
        return eventHandler;
    }, [switchTab]);

    const handleViewAllPress = useCallback(() => {
        navigation.push('ViewAll')
    }, [navigation])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleButtonPress("Albums")} key='Albums' style={isButtonActiveFunction(activeTab, 'Albums')} >
                    <Text style={styles.buttonText}>Albums</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPress("Artists")} style={isButtonActiveFunction(activeTab, 'Artists')}>
                    <Text style={styles.buttonText}>Artists</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.albumsContainer}>
                <View style={styles.albumsTitleContainer}>
                    <Text style={styles.albumsTitleText}>{activeTab} of the year</Text>
                    <TouchableOpacity onPress={handleViewAllPress}><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
                </View>
                <View>
                    {
                        activeTab === 'Artists' ?
                            < FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data.Artists}
                                keyExtractor={(item, index) => item._id || index.toString()}
                                renderItem={({ item }) => <ArtistCard {...item} />}
                            /> :
                            < FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data.Albums}
                                keyExtractor={(item, index) => item._id || index.toString()}
                                renderItem={({ item }) => <AlbumCard {...item} />}
                            />
                    }
                </View>
                <View style={styles.albumsTitleContainer}>
                    <Text style={styles.albumsTitleText}>Popular {activeTab}</Text>
                    <TouchableOpacity onPress={handleViewAllPress}><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
                </View>
                <View>
                    {
                        activeTab === 'Artists' ?
                            < FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data.Artists}
                                keyExtractor={(item, index) => item._id || index.toString()}
                                renderItem={({ item }) => <ArtistCard {...item} />}
                            /> :
                            < FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data.Albums}
                                keyExtractor={(item, index) => item._id || index.toString()}
                                renderItem={({ item }) => <AlbumCard {...item} />}
                            />
                    }
                </View>
            </View>
        </View>
    )
}