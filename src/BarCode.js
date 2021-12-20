import React from 'react';
import {View, Text} from 'react-native';

const data = new Array(40).fill(0).map((_, i) => i-5);

function superHardOperation(x) {
  return (1 / x + 6) * x * 20;
}

export default function BarCode() {
  return (
    <View>
      {data.map((x, i) => (
        <View
          style={{
            height: superHardOperation(x),
            backgroundColor: i % 2 == 0 ? 'black' : 'white',
          }}
        />
      ))}
    </View>
  );
}
