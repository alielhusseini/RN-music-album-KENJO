import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from './assets/colors';
import { HomeHeader } from './components/shared';

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
      <HomeHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
