import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
      <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '',
  }
});
