import React from 'react';
import {View, Text} from 'react-native';

const data = new Array(20).fill(0).map((_, i) => i - 10);

function superHardOperation(x) {
  return (1 / x - 1) * x + 2 ** x;
}

export default function People() {
  return (
    <View>
      {data.map(x => (
        <Text>
          {x}:{superHardOperation(x)}
        </Text>
      ))}
    </View>
  );
}
