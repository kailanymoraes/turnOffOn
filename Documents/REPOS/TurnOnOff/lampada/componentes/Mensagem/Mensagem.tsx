import { StyleSheet, Text, View } from 'react-native';

type Props = { //definir a prop
  nome: string,
  idade: number,
  status: boolean 
}

export default function Mensagem(props: Props) { //Passo 2 = receber a prop como parametro da função que cria o componente
                                                //Passo3 = fazer algo com o parametro passado.No caso, estamos apenas exibindo no componente
      return(
        <View>
          <Text style={styles.recado}>   
            Olá {props.nome}. Você tem {props.idade} anos. 
            Seu status é {props.status ? "Ativo" : "Inativo"}.</Text>      
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