import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './HomeMain.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'

export function HomeMain() {
    return (
        <View style={styles.container}>
            {/* introduction (I could've made it a seperate component but deliberately chose not to) */}
            <View style={styles.introContainer}>
                <View style={styles.titleUser}>
                    <Text style={styles.textUser}>Hello User,</Text>
                </View>
                <View style={styles.titleHeading}>
                    <Text style={styles.textHeading}>Discover New Song</Text>
                </View>
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
            {/* main (I could've made it a seperate component but deliberately chose not to) */}
            <View style={styles.mainContainer}>
                <View style={styles.buttonContainer}>
                    < TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Artists</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}