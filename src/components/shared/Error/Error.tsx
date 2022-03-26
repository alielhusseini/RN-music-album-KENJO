import React, { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './Error.styles';

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Error() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text style={styles.text}>Something went wrong...</Text>
            </ScrollView>
        </SafeAreaView>
    );
}