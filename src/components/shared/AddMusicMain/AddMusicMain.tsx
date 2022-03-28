import { View, Text, TextInput, TouchableOpacity, Keyboard, GestureResponderEvent, Omit, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles, pickerSelectStyles } from './AddMusicMain.styles'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { IAlbum, IArtist } from '../../../data/data.types'
import { getArtists, postAlbum, postArtist } from '../../../api'
import { Loader } from '../Loader/Loader'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from "react-native-picker-select";
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type ArtistType = Omit<IArtist, '_id'>
type AlbumType = Omit<IAlbum, '_id'>

const emptyObjects: { Artist: ArtistType, Album: AlbumType } = {
    Album: {
        title: "",
        artistId: "",
        coverUrl: "",
        year: 0,
        genre: ""
    },
    Artist: {
        name: "",
        photoUrl: "",
        birthdate: "",
        deathDate: ""
    }
}

export function AddMusicMain() {
    const { activeTab, toggleTriggerFetch } = useMusicContext()
    const navigation = useNavigation<NativeStackNavigationProp<{ Home: undefined }, 'Home'>>()
    const [data, setData] = useState<AlbumType | ArtistType>(emptyObjects.Album)
    const [artists, setArtists] = useState<{ label: "", value: string }[]>([])
    const [loading, setLoading] = useState(true)

    const handlePressKeyboardDismiss = useCallback((event: GestureResponderEvent) => {
        Keyboard.dismiss()
    }, [Keyboard])

    const fetchArtists = useCallback(async () => {

        try {
            setLoading(true)
            const { data: allArtists } = await getArtists()
            const allArtistsAsOptions = allArtists.map((artist: IArtist) => {
                return {
                    label: artist.name,
                    value: artist._id
                }
            });
            setArtists(allArtistsAsOptions)
        } catch (error) {
            // error
        } finally {
            setLoading(false)
        }
    }, [setLoading, setArtists])

    const handleChangeInput = (name: string) => {
        return (val: string) => {
            data as AlbumType
            setData(prevState => {
                const newState = { ...prevState, [name]: val }
                return newState
            })
        }
    }

    const checkUrlImage = useCallback((url: string) => {
        //define some image formats 
        let types = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];

        //split the url into parts that has dots before them
        let parts = url.split('.');

        //get the last part 
        let extension = parts[parts.length - 1];

        //check if the extension matches list 
        if (types.indexOf(extension) !== -1) {
            return true;
        }
        return false
    }, [])

    const handleSave = useCallback(async () => {
        if (activeTab === 'Albums') {
            const innerData = data as IAlbum
            if (!innerData.title || !innerData.genre || !innerData.year || !innerData.coverUrl || !innerData.artistId) {
                Alert.alert('Error', 'Please fill all the fields')
                return
            }

            if (!Number(innerData.year) || innerData.year < 1909 || innerData.year > 2030) {
                Alert.alert('Error', 'Please fill the year correctly')
                return
            }

            try {
                await postAlbum({ data: innerData })
                toggleTriggerFetch()
                navigation.replace('Home')
            } catch (err) {
                //
            }
        } else {
            const innerData = data as IArtist

            if (!innerData.name || !innerData.birthdate || !innerData.photoUrl) {
                Alert.alert('Error', 'Please fill all the fields')
                return
            }

            if (innerData.birthdate && (!moment(innerData.birthdate).isValid() || moment(innerData.birthdate).year() < 1909 || moment(innerData.birthdate).year() > 2030)) {
                Alert.alert('Error', 'Date of birth is not valid')
                return
            }

            if (innerData.deathDate && (!moment(innerData.deathDate).isValid() || moment(innerData.deathDate).year() < 1909 || moment(innerData.deathDate).year() > 2030)) {
                Alert.alert('Error', 'Death date is not valid')
                return
            }

            if (innerData.photoUrl && !checkUrlImage(innerData.photoUrl)) {
                Alert.alert('Error', 'Photo URL is not valid')
                return
            }

            try {
                await postArtist({ data: innerData })
                toggleTriggerFetch()
                navigation.replace('Home')
            } catch (err) {
                //
            }
        }
    }, [data])

    const createForm = useCallback((data) => {
        if (activeTab === 'Albums') {
            data as AlbumType
            return (
                <View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Album Name: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('title')} placeholder='Enter Album' style={styles.input} value={data.title} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Artist Name: </Text>
                        <RNPickerSelect style={pickerSelectStyles} items={artists} value={data.artistId} onValueChange={handleChangeInput('artistId')} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Genre: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('genre')} placeholder='Enter Genre' style={styles.input} value={data.genre} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Released In: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('year')} placeholder='YYYY-MM-DD & 1909<YYYY<2030' style={styles.input} value={data.year.toString()} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Cover: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('coverUrl')} placeholder='Enter Cover' style={styles.input} value={data.coverUrl} />
                    </View>
                </View>
            )
        } else {
            data as ArtistType
            return (
                <View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Artist Name: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('name')} placeholder='Enter Name' style={styles.input} value={data.name} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Date of birth: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('birthdate')} placeholder='YYYY-MM-DD & 1909<YYYY<2030' style={styles.input} value={data.birthdate} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Death Date: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('deathDate')} placeholder='(* not required *)' style={styles.input} value={data.deathDate} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Photo: </Text>
                        <TextInput placeholderTextColor='#dddddd55' onChangeText={handleChangeInput('photoUrl')} placeholder='Enter Photo' style={styles.input} value={data.photoUrl} />
                    </View>
                </View>
            )
        }
    }, [data, activeTab, artists])

    useEffect(() => {
        if (activeTab === "Albums") {
            setData(emptyObjects.Album);
            fetchArtists();
        } else {
            setData(emptyObjects.Artist);
            setLoading(false);
        };
    }, []);

    return (
        <Loader show={loading}>
            <View style={styles.container}>
                <View style={styles.iconContainers}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={handleSave} style={styles.iconContainer}>
                            <AntDesign style={styles.iconEdit} name='upload' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity activeOpacity={1} onPress={handlePressKeyboardDismiss} style={{ flex: 1 }}>
                        {createForm(data)}
                    </TouchableOpacity>
                </View>
            </View>
        </Loader>
    )

}