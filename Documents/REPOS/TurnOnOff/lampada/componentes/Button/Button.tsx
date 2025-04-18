import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Olá</Text>
        </TouchableOpacity>
      
    );
}

const styles = StyleSheet.create({ 
    button: {
        width: 170,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#000',
        alignSelf: 'center',
        top: '10%',
    },
    buttonText: {
        color: '#EBDA00',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18
    }
})