import { View, Text, TouchableOpacity, TextInput, Alert, TextComponent } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './DetailsMain.styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useMusicContext } from '../../../hooks/useMusicContext'
import { IAlbum, IArtist } from '../../../data/data.types'
import { deleteAlbum, deleteArtist, getArtist, getArtists, updateAlbum, updateArtist } from '../../../api'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import RNPickerSelect from "react-native-picker-select";


export function DetailsMain({ data }: { data: IAlbum | IArtist }) {

    const controller = useRef(new AbortController())
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { activeTab, toggleTriggerFetch } = useMusicContext()
    const [name, setName] = useState<string>('')
    const [names, setNames] = useState<{ label: string, value: string }[]>([])
    const [localData, setLocalData] = useState<IAlbum | IArtist>({ ...data })
    const navigation = useNavigation<NativeStackNavigationProp<{ Home: undefined }, 'Home'>>()

    const handleToggleEdit = useCallback(() => {
        setLocalData({ ...data })
        setIsEditMode(prev => !prev)
    }, [data])

    const handleChangeInput = (name: string) => {
        return (val: string) => {
            setLocalData(prevState => {
                const newState = { ...prevState, [name]: val };
                return newState;
            })
        }
    }

    const cardGeneratorEdit = useCallback((data, localData) => {
        if (activeTab === 'Albums') {
            data as IAlbum
            localData as IAlbum
            return (
                <View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Album Name: </Text>
                        <TextInput onChangeText={handleChangeInput('title')} placeholder='Enter Album' style={styles.input} value={localData.title} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Artist Name: </Text>
                        <RNPickerSelect items={names} value={localData.artistId} onValueChange={handleChangeInput('artistId')} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Genre: </Text>
                        <TextInput onChangeText={handleChangeInput('genre')} placeholder='Enter Genre' style={styles.input} value={localData.genre} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Released In: </Text>
                        <TextInput onChangeText={handleChangeInput('year')} placeholder='YYYY-MM-DD & 1909<YYYY<2030' style={styles.input} value={localData.year.toString()} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Cover: </Text>
                        <TextInput onChangeText={handleChangeInput('coverUrl')} placeholder='Enter Cover' style={styles.input} value={localData.coverUrl} />
                    </View>
                </View>
            )
        } else {
            data as IArtist
            localData as IArtist
            return (
                <View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Artist Name: </Text>
                        <TextInput onChangeText={handleChangeInput('name')} placeholder='Enter Name' style={styles.input} value={localData.name} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Date of birth: </Text>
                        <TextInput onChangeText={handleChangeInput('birthdate')} placeholder='YYYY-MM-DD & 1909<YYYY<2030' style={styles.input} value={localData.birthdate} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Death Date: </Text>
                        <TextInput onChangeText={handleChangeInput('deathDate')} placeholder='(* not required *)' style={styles.input} value={localData.deathDate} />
                    </View>
                    <View style={styles.infoEditContainer}>
                        <Text style={styles.infoEdit}>Photo: </Text>
                        <TextInput onChangeText={handleChangeInput('photoUrl')} placeholder='Enter Photo' style={styles.input} value={localData.photoUrl} />
                    </View>
                </View>
            )
        }
    }, [isEditMode])

    const cardGenerator = useCallback((data) => {
        if (activeTab === 'Albums') {
            data as IAlbum
            return (
                <View>
                    <View><Text style={styles.info}>Album Name: {data.title}</Text></View>
                    <View><Text style={styles.info}>Artist Name: {name}</Text></View>
                    <View><Text style={styles.info}>Genre: {data.genre}</Text></View>
                    <View><Text style={styles.info}>Released In: {data.year}</Text></View>
                </View>
            )
        } else {
            data as IArtist
            return (
                <View>
                    <View><Text style={styles.info}>Artist Name: {data.name}</Text></View>
                    <View><Text style={styles.info}>Date of birth: {moment(data.birthdate).format('YYYY-MM-DD')}</Text></View>
                    {data.deathDate !== null && <View><Text style={styles.info}>Death Date: {moment(data.deathDate).format('YYYY-MM-DD')}</Text></View>}
                </View>
            )
        }
    }, [activeTab, data, name])

    const fetchName = useCallback(async () => {
        let innerData = data as IAlbum
        try {
            const { data: { name } } = await getArtist({ id: innerData.artistId, controller: controller.current })
            const { data: allArtists } = await getArtists()
            setName(name)
            setNames(allArtists.map((artist: IArtist) => {
                return {
                    label: artist.name,
                    value: artist._id
                }
            }))
        } catch (err) {
            //
        }
    }, [data, activeTab])

    // it's better of course to make a request to the url and check if we have no response then the image doesn't exist
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
            const innerData = localData as IAlbum
            if (!innerData.title || !innerData.genre || !innerData.year || !innerData.coverUrl) {
                Alert.alert('Error', 'Please fill all the fields')
                return
            }

            if (Number(innerData.year) === NaN || innerData.year < 1909 || innerData.year > 2030) {
                Alert.alert('Error', 'Please fill the year correctly')
                return
            }

            try {
                await updateAlbum({ id: innerData._id, data: innerData })
                toggleTriggerFetch()
                navigation.replace('Home')
            } catch (err) {
                //
            }
        } else {
            const innerData = localData as IArtist

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
                await updateArtist({ id: innerData._id, data: innerData })
                toggleTriggerFetch()
                navigation.replace('Home')
            } catch (err) {
                //
            }
        }
    }, [localData])

    useEffect(() => {
        activeTab === 'Albums' && fetchName()
        return () => controller.current.abort()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainers}>
                {isEditMode ? (
                    <>
                        <TouchableOpacity onPress={handleSave} style={styles.iconContainer}>
                            <AntDesign style={styles.iconEdit} name='upload' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleToggleEdit} style={styles.iconContainer}>
                            <Octicons style={styles.iconDanger} name='x' />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={handleToggleEdit} style={styles.iconContainer}>
                            <Entypo style={styles.iconEdit} name='edit' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("Delete", "Are you sure you want to delete this item?", [
                                {
                                    text: "Cancel",
                                },
                                {
                                    text: "OK", onPress: () => {
                                        if (activeTab === 'Albums') {
                                            deleteAlbum({ id: data._id })
                                        } else {
                                            deleteArtist({ id: data._id, })
                                        }
                                        toggleTriggerFetch()
                                        navigation.replace('Home')
                                    }
                                }
                            ])
                        }} style={styles.iconContainer}>
                            <FontAwesome5 style={styles.iconDanger} name='trash-alt' />
                        </TouchableOpacity>
                    </>
                )}

            </View>
            <View style={styles.cardDetailsContainer}>
                {isEditMode ? (
                    cardGeneratorEdit(data, localData)
                ) : (
                    cardGenerator(data)
                )}
            </View>
        </View >
    )
}