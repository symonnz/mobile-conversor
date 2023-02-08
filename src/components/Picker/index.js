import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function FunctionPicker(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const arrayCurrency = props.currency;

  let itemCurrency = arrayCurrency.map((value, key) => {
    return <Picker.Item key={key} value={value.value} label={value.label} />;
  });

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          props.onChange(itemValue);
          setSelectedLanguage(itemValue);
        }}
      >
        {itemCurrency}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#830BD1',
    borderRadius: 2
  }
});
