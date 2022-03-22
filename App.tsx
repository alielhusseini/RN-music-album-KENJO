import { SafeAreaView, StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from './assets/colors';
import { Home } from './components/screens/Home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} backgroundColor={COLORS.white} barStyle="dark-content" />
      <Home />
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
