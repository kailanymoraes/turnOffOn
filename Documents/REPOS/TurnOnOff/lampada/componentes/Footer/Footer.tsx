import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.footer}>
          <Text style={styles.text}> XPTO Softwares - Todos os direitos reservados</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({ 
    footer: {
        backgroundColor: '#000',
        flex: 0.5, 
        alignItems: 'center',
        justifyContent: 'center',
        top: 86
    },
    text: {
        color: '#fff',
    }

  })