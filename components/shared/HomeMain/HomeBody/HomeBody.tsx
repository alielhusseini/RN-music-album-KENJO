import { View, Text, TouchableOpacity, FlatList, GestureResponderEvent } from 'react-native'
import React, { useCallback, useState } from 'react'
import { data } from '../../../../data/data'
import { styles } from './HomeBody.styles'
import { AlbumCard, ArtistCard } from '../../Card'

const isButtonActiveFunction = (isButtonActive: string, checkedValue: string) => {
    return isButtonActive === checkedValue ? [styles.button, styles.buttonActive] : styles.button
}

export function HomeBody() {

    const [isButtonActive, setIsButtonActive] = useState<string>('Albums')

    // This is a closure, purposely made to re-use the handleButtonPress functionality without creating n number of functions that do the same thing just have the setter function parameter changed
    const handleButtonPress = useCallback((tabName: "Artists" | "Albums") => {

        const eventHandler = (event: GestureResponderEvent) => {
            setIsButtonActive(tabName);
        };
        return eventHandler;
    }, [setIsButtonActive]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleButtonPress("Albums")} key='Albums' style={isButtonActiveFunction(isButtonActive, 'Albums')} >
                    <Text style={styles.buttonText}>Albums</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPress("Artists")} style={isButtonActiveFunction(isButtonActive, 'Artists')}>
                    <Text style={styles.buttonText}>Artists</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.albumsContainer}>
                <View style={styles.albumsTitleContainer}>
                    <Text style={styles.albumsTitleText}>{isButtonActive} of the year</Text>
                    <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
                </View>
                <View style={styles.albumsItemContainer}>
                    {
                        isButtonActive === 'Artists' ?
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
                    <Text style={styles.albumsTitleText}>Popular {isButtonActive}</Text>
                    <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
                </View>
                <View style={styles.albumsItemContainer}>
                    {
                        isButtonActive === 'Artists' ?
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