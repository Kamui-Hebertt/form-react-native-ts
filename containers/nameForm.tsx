import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';


interface Props  {
  onSend: (newName : string) => void
}
export default function FieldName({ onSend }: Props) {
   const [name, setName] = useState<string>('');

   const onClick = ():void => {
    onSend(name);
   }

  return (
    <View >
      <Text>What is your name?</Text>
      <TextInput placeholder='Enter your name'
        value={name}
        onChangeText={t => setName(t)} />
        <Button title="Submit" onPress={onClick} />
      <StatusBar style="auto" />
    </View>
  );
}

