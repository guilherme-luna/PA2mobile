import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Contatos' }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Conversa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
