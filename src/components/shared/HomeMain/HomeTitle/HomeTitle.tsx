import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './HomeTitle.styles'

export function HomeTitle() {
    return (
        <View style={styles.introContainer}>
            <View style={styles.titleUser}>
                <Text style={styles.textUser}>Hello User,</Text>
            </View>
            <View style={styles.titleHeading}>
                <Text style={styles.textHeading}>Discover New Song</Text>
            </View>
            {/* this section is just for ui purposes, I had no time to make the funcionality work due to high overload of work from my day job */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <EvilIcons name="search" style={styles.iconSearch} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputSearch}
                        placeholder='Search Music'
                        placeholderTextColor={'#00000077'}
                    />
                    <TouchableOpacity style={styles.iconContainer}>
                        <Feather name="sliders" style={styles.iconFilter} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}