import { View, Text, TextInput, TouchableOpacity, Keyboard, GestureResponderEvent, Omit } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './AddMusicMain.styles'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { IAlbum, IArtist } from '../../../data/data.types'
import { getArtists } from '../../../api'
import { Loader } from '../Loader/Loader'

type ArtistType = Omit<IArtist, '_id'>;
type AlbumType = Omit<IAlbum, '_id'>;

const emptyObjects: { artist: ArtistType, album: AlbumType } = {
    album: {
        title: "",
        artistId: "",
        coverUrl: "",
        year: 0,
        genre: ""
    },
    artist: {
        name: "",
        photoUrl: "",
        birthdate: "",
        deathDate: ""
    }
}

export function AddMusicMain() {
    const { activeTab } = useMusicContext()

    const [data, setData] = useState<AlbumType | ArtistType | null>()
    const [artists, setArtists] = useState<{ label: "", value: string }[]>([]);
    const [loading, setLoading] = useState(true);

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    const fetchArtists = useCallback(async () => {

        try {
            setLoading(true);
            const { data: allArtists } = await getArtists();
            const allArtistsAsOptions = allArtists.map((artist: IArtist) => {
                return {
                    label: artist.name,
                    value: artist._id
                }
            });
            setArtists(allArtistsAsOptions);
        } catch (error) {
            // error
        } finally {
            setLoading(false);
        }
    }, [setLoading, setArtists]);

    //! continue here
    const createForm = useCallback((data) => {
        if (activeTab === 'Albums') {
            data as IAlbum
            return (
                <View>
                    <TextInput />
                </View>
            )
        } else {

        }
    }, [data, activeTab, artists])

    useEffect(() => {
        if (activeTab === "Albums") {
            setData(emptyObjects.album);
            fetchArtists();
        } else {
            setData(emptyObjects.artist);
            setLoading(false);
        };
    }, []);

    return (
        <Loader show={loading}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                        {createForm(data)}
                    </TouchableOpacity>
                </View>
            </View>
        </Loader>
    )

}