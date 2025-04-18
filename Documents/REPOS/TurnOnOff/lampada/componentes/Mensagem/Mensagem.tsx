import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View>
          <Text style={styles.recado}>Olá Kakyzx. Você tem 19. seu status é inativo.</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 26
    }, 
    recado: {
      color: '#fff',
      top: 100
  }
    });