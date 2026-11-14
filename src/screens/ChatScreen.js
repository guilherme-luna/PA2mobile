import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { contatoId, nome } = route.params;
  const [mensagens, setMensagens] = useState(mensagemService.getMensagens(contatoId));
  const [texto, setTexto] = useState('');

  function enviar() {
    const enviada = mensagemService.enviarMensagem(contatoId, texto);
    if (!enviada) {
      return;
    }
    setMensagens(mensagemService.getMensagens(contatoId));
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Mensagem mensagem={item.texto} recebida={item.recebida} />}
      />

      <View style={styles.entrada}>
        <TextInput
          style={styles.campo}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite uma mensagem"
        />
        <Button title="Enviar" onPress={enviar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5dd',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#fff',
  },
  entrada: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  campo: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
});
