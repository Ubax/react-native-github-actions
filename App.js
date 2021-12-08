/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Currencies from './src/Currencies';
import Sum from './src/Sum';
import Timer from './src/Timer';
import BarCode from './src/BarCode';

const PROBLEMS = {
  Sum: <Sum />,
  Timer: <Timer />,
  Currencies: <Currencies />,
  'Bar Code': <BarCode />,
};

function App() {
  const [problemName, setProblemName] = React.useState('none');
  const problem = PROBLEMS[problemName];
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1, marginHorizontal: 12}}>
          <Text style={styles.header}>Bug hunting</Text>
          {problem && (
            <Button title="< Back" onPress={() => setProblemName('none')} />
          )}
          <ScrollView style={{flex: 1}}>
            {problem ??
              Object.keys(PROBLEMS).map(name => (
                <Button title={name} onPress={() => setProblemName(name)} />
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default App;
