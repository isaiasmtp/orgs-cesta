import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/pages/Cesta/Cesta';
import mock from "./src/mocks/cesta";
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </View>
  );
}
