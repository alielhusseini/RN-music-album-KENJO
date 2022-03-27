import React, { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native';
import { useMusicContext } from '../../../hooks/useMusicContext';
import { styles } from './Error.styles';

export function Error() {
    const [refreshing, setRefreshing] = useState(false);

    const { isError } = useMusicContext();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setTimeout(async () => {
            await isError.asyncHandler?.()
        }, 1000);
        setRefreshing(false)
    }, [isError.error]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text style={styles.text}>Something went wrong...</Text>
            </ScrollView>
        </SafeAreaView>
    );
}