import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Router from './src/router';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

