import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const getUrl = (from, to) =>
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.toUpperCase()}/${to}.json`;

export default function Currencies() {
  const [from, setFrom] = React.useState('eur');
  const [to, setTo] = React.useState('pln');
  const [rate, setRate] = React.useState(0.0);

  React.useEffect(() => {
    fetch(getUrl(from, to))
      .then(resp => resp.json())
      .then(data => setRate(data[to]));
  }, [from, to]);
  return (
    <View>
      <Text style={styles.normalText}>
        {from} - {to} = {rate}
      </Text>
    </View>
  );
}
