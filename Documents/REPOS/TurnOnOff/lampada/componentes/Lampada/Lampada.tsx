import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import lampOff from '../../assets/lampOff.jpg';
import lampOn from '../../assets/lampOn.jpg';
import React, {useState} from 'react'; 

export default function Lampada() {

  const [ligado, setLigado] = useState(true); //hook
  const [mensagem, setMensagem] = useState("Ligado");

  //passo 1 - criar o hook - variável e o setter
  //passo 2 - inicializar o state ou a 

  function TurnOnOff() {

/*       if (ligado==true){
          setLigado = false;
      } 
      else {
           setLigado = true;
      } */
      setLigado(!ligado);
      setMensagem(ligado?"Desligado":"Ligado");

  }


    return (
      <View style={lampadaStyles.lampada}>
        <TouchableOpacity onPress={TurnOnOff}>
            <Image source={ligado?lampOn:lampOff} />
        </TouchableOpacity>

        <TouchableOpacity style={lampadaStyles.button} onPress={TurnOnOff}>
             <Text style={lampadaStyles.buttonText}>
                {mensagem}
             </Text>
        </TouchableOpacity>

        <Text style={lampadaStyles.textAcesso}>Hello World Home!</Text>
      </View>
    );
  }

  const lampadaStyles = StyleSheet.create({
    lampada: {
      alignItems: 'center',
      padding: 20
    },
    textAcesso: {
        top: 50,
        color: '#EBDA00',
        backgroundColor: '#000'
    },
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
  });