import { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { contatoId } = route.params;
  const [mensagens, setMensagens] = useState(() => mensagemService.getMensagens(contatoId));
  const [texto, setTexto] = useState('');
  const headerHeight = useHeaderHeight();

  function enviar() {
    const enviada = mensagemService.enviarMensagem(contatoId, texto);
    if (!enviada) {
      return;
    }
    setMensagens(mensagemService.getMensagens(contatoId));
    setTexto('');
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={headerHeight}>
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
          <Button title="Enviar" color="#075e54" onPress={enviar} disabled={!texto.trim()} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5dd',
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
