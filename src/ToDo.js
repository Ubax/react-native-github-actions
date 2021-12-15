import React from 'react';
import store, {add, remove, selectList} from './redux/store';
import {Provider} from 'react-redux';
import {View, Text, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function ToDoElement({name, onRemove}) {
  return (
    <View
      style={{
        flex: 1,
        height: 50,
        backgroundColor: '#444',
        marginBottom: 10,
        flexDirection: 'row',
      }}>
      <View style={{flex: 4}}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
            marginHorizontal: 16,
            marginVertical: 8,
          }}>
          {name}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Button title="D" onPress={() => onRemove(name)} />
      </View>
    </View>
  );
}

function ToDoList() {
  const list = useSelector(selectList);
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
      }}>
      {list.map(name => (
        <ToDoElement
          name={name}
          onRemove={removeName => {
            dispatch(remove(removeName));
          }}
        />
      ))}
      <TextInput
        style={{
          fontSize: 20,
        }}
        placeholder="Action name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <Button
        title="Add new"
        onPress={() => {
          dispatch(add(name));
          setName('');
        }}
      />
    </View>
  );
}

export default function ToDo() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}
