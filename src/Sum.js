import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export default function Sum() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const result = a + b;
  return (
    <View>
      <TextInput
        style={styles.normalText}
        value={a}
        onChange={e => setA(e.nativeEvent.text)}
        placeholder="Value of A"
      />
      <TextInput
        style={styles.normalText}
        value={b}
        onChange={e => setB(e.nativeEvent.text)}
        placeholder="Value of B"
      />
      <Text style={styles.normalText}>
        {a} + {b} = {result}
      </Text>
    </View>
  );
}
