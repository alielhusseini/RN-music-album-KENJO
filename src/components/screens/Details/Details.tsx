import { View, Text } from 'react-native'
import React from 'react'
import { PropType } from './Details.types';

export function Details({ route, navigation }: PropType) {

    const { _id } = route.params;

    return (
        <View>
            <Text>{_id}</Text>
        </View>
    )
}