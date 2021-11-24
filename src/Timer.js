import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FancyList from './FancyList';
import {styles} from './styles';

export default function Timer() {
  const [time, setTime] = React.useState(0);
  const resetTime = () => {
    setTime(0);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.normalText}>{time}</Text>
      <ScrollView>
        <FancyList onSelect={resetTime} />
      </ScrollView>
    </View>
  );
}
