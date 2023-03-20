import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Text, TextInput, View } from 'react-native';


export default function FieldName() {
  const [ name, setName ] = useState<string>('')
  console.log(name)
  return (
    <View >
      <Text>What is your name?</Text>
      <TextInput placeholder='Enter your name' 
      value={name}
      onChangeText={t =>setName(t)}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

