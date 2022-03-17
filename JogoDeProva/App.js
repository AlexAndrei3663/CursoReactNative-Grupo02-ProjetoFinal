import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './componentes/Home';
import Resultado from './componentes/Resultado';
import TelaDoJogo from './componentes/TelaDoJogo';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff4800',
    accent: 'orange',
    background: 'white'
  },
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Jogo de Prova" component={TelaDoJogo} />
          <Stack.Screen name="Resultado" component={Resultado} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
