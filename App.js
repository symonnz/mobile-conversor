import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import FunctionPicker from './src/components/Picker/index';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.converterContainer}>
        <View style={styles.currencyArea}>
          <Text style={styles.currencyAreaTitle}>Selecione uma Moeda</Text>
          <FunctionPicker />
        </View>
        <View style={styles.valueArea}>
          <Text style={styles.valueAreaTitle}>
            Digite um valor para converter em R$
          </Text>
          <TextInput
            cursorColor={'#4C0677'}
            keyboardType="numeric"
            placeholder="Exemplo: 150"
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            alert('click');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Converter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultArea}>
        <Text style={styles.result}>XX USD</Text>
        <Text style={[styles.result, { color: '#830BD1' }]}> = </Text>
        <Text style={styles.result}>R$ YY</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// F5F4F4 cinza
// 830BD1 roxo
// FFFEFE cinza claro
// 4C0677 roxo escuro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F4',
    alignItems: 'center'
  },
  converterContainer: {
    width: '90%',
    marginTop: 50
  },
  currencyArea: {
    backgroundColor: '#FFFEFE',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8
  },
  currencyAreaTitle: {
    fontSize: 18,
    marginBottom: 12
  },
  valueArea: {
    backgroundColor: '#FFFEFE',
    padding: 12,
    borderRadius: 8
  },
  valueAreaTitle: {
    fontSize: 18,
    marginBottom: 12
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#830BD1',
    borderRadius: 2
  },
  button: {
    backgroundColor: '#830BD1',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8
  },
  buttonTitle: {
    color: '#FFFEFE',
    fontSize: 18,
    textTransform: 'uppercase'
  },
  resultArea: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    fontSize: 32,
    color: '#4C0677'
  }
});
