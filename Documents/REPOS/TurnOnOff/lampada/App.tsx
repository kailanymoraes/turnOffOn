import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './componentes/Header/Header';
import Lampada from './componentes/Lampada/Lampada'
import Footer from './componentes/Footer/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Lampada/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
