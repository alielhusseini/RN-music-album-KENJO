import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './DetailsMain.styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useMusicContext } from '../../../hooks/useMusicContext'

export function DetailsMain() {

    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { activeTab } = useMusicContext()

    const handleToggleEdit = useCallback(() => {
        setIsEditMode(prev => !prev)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainers}>
                {isEditMode ? (
                    <>
                        <TouchableOpacity style={styles.iconContainer}>
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
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome5 style={styles.iconDanger} name='trash-alt' />
                        </TouchableOpacity>
                    </>
                )}

            </View>
            <View style={styles.cardDetails}>
                {isEditMode ? null : (
                    <View>
                        <View>
                            <Text>Title</Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}