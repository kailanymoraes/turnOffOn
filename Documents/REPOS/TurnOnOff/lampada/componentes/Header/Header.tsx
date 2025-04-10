import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
          <Text style={styles.text}> Turn On/Off</Text>
          <Text style={styles.recado}>Olá Kakyzx. Você tem 19. seu status é inativo.</Text>
        </View>
    );
  }

const styles = StyleSheet.create({
    header: {
      height: 260,
      width: '100%',
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 26
    }, 
    recado: {
      color: '#fff',
      top: 100
  }
    });
  