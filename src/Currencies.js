import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const getUrl = (from, to) =>
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;

export default function Currencies() {
  const [from, setFrom] = React.useState('eur');
  const [to, setTo] = React.useState('pln');
  const [rate, setRate] = React.useState(0.0);

  React.useEffect(() => {
    fetch(getUrl(from, to))
      .then(resp => resp.json())
      .then(data => setRate(data['pln']));
  }, [from, to]);
  return (
    <View>
      <TextInput
        value={from}
        onChange={e => setFrom(e.nativeEvent.text.toLowerCase())}
      />
      <TextInput
        value={to}
        onChange={e => setTo(e.nativeEvent.text.toLowerCase())}
      />
      <Text style={styles.normalText}>
        {from} - {to} = {rate}
      </Text>
    </View>
  );
}
