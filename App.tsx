import { SafeAreaView, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from './assets/colors';
import { Home } from './components/screens';
import { Add } from './components/shared';

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Home />
      </ScrollView>
      <Add />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
});
