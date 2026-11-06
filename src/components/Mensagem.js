import { StyleSheet, Text, View } from 'react-native';

// recebida = true: esquerda / false: direita
export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={[styles.balao, recebida ? styles.recebida : styles.enviada]}>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balao: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  recebida: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  enviada: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  texto: {
    fontSize: 16,
  },
});
