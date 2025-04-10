import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../Button/Button'

export default function Lampada() {
    return (
      <View style={styles.lampada}>
        <Image 
        source={require('./../../assets/lampOff.jpg')}
        />
        <Button/>
        <Text style={styles.textLamp}>Hello World Home!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    lampada: {
      alignItems: 'center',
      padding: 20
    },
    textLamp: {
        top: 50,
        color: '#EBDA00',
        backgroundColor: '#000'
    }
  });