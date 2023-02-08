import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native';

import FunctionPicker from './src/components/Picker/index';
import api from './src/services/api';

export default function App() {
  const [currency, setCurrency] = useState([]);
  const [currencySelected, setCurrencySelected] = useState(null);

  const [inputValue, setInputValue] = useState(0);

  const [loading, setLoading] = useState(true);

  const [currencyValue, setCurrencyValue] = useState(null);
  const [convertedValue, setConvertedValue] = useState(0);

  async function converter() {
    if (currencySelected === null || inputValue === 0) {
      alert('Selecione uma moeda');
      return;
    }

    if (inputValue === 0) {
      alert('Digite um valor');
      return;
    }

    const response = await api.get(`all/${currencySelected}-BRL`);
    let result = response.data[currencySelected].ask * parseFloat(inputValue);

    setConvertedValue(`R$ ${result.toFixed(2)}`);
    setCurrencyValue(inputValue);

    Keyboard.dismiss();
  }

  useEffect(() => {
    async function loadCurrency() {
      const response = await api.get('all');
      let arr = [];

      Object.keys(response.data).map(key => {
        arr.push({
          key: key,
          label: key,
          value: key
        });
      });
      setCurrency(arr);
      setLoading(false);
    }

    loadCurrency();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#830BD1" size={50} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.converterContainer}>
          <View style={styles.currencyArea}>
            <Text style={styles.currencyAreaTitle}>Selecione uma Moeda</Text>
            <FunctionPicker
              currency={currency}
              onChange={currency => {
                setCurrencySelected(currency);
              }}
            />
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
              onChangeText={value => {
                setInputValue(value);
              }}
            />
          </View>
          <TouchableOpacity onPress={converter} style={styles.button}>
            <Text style={styles.buttonTitle}>Converter</Text>
          </TouchableOpacity>
        </View>

        {convertedValue !== 0 && (
          <View style={styles.resultArea}>
            <Text style={styles.result}>
              {currencyValue} {currencySelected}
            </Text>
            <Text style={[styles.result, { color: '#830BD1' }]}> = </Text>
            <Text style={styles.result}>{convertedValue}</Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
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
