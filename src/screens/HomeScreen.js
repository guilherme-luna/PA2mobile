import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const contatos = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carla' },
  { id: 4, nome: 'Diego' },
];

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={contatos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.contato}
          onPress={() => navigation.navigate('Chat', { contatoId: item.id, nome: item.nome })}
        >
          <Text style={styles.nome}>{item.nome}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  contato: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  nome: {
    fontSize: 18,
  },
});
