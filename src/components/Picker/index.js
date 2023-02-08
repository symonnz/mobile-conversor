import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function FunctionPicker() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" key={0} />
        <Picker.Item label="JavaScript" value="js" key={1} />
        <Picker.Item label="Python" value="py" key={2} />
        <Picker.Item label="Rust" value="rs" key={3} />
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
