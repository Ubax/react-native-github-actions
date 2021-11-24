import React from 'react';
import {Button} from 'react-native';

const items = new Array(1000).fill(0).map((_, index) => index);

function FancyButton(props) {
  return (
    <>
      {items.map(i => (
        <Button onPress={props.onSelect} title={`Item ${i + 1}`} />
      ))}
    </>
  );
}

export default React.memo(FancyButton);
