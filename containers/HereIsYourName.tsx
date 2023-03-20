import { Text, TextInput, View, Button } from 'react-native';


interface Props  {
  names: string;
  clear: () => void;
}
export default function HereIsYourName({ names, clear }: Props) {
   
  return (
    <View >

      <Text>Hello {names}</Text>
      <Text>Aren't you {names} ?</Text>
      <Button title="Submit" onPress={clear} />
      
    </View>
  );
}

