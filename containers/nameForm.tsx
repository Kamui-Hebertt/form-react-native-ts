import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet,TouchableOpacity } from 'react-native';



interface Props  {
  onSend: (newName : string) => void
}
export default function FieldName({ onSend }: Props) {
   const [name, setName] = useState<string>('');

   const onClick = ():void => {
    onSend(name);
   }

  return (
    <View  style={styles.firstForm} >
      <Text style={styles.title}>What is your name?</Text>
      <TextInput placeholder='Enter your name'
      style={styles.field}
        value={name}
        onChangeText={t => setName(t)} />
        <TouchableOpacity style={styles.btn}  onPress={onClick} >
        <Text >Submit</Text>
          </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  firstForm: {

    color:'#ffff',
    backgroundColor: '#23ff86',

    height:450,
    width:300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
   
  },
  field: {
    
    height:40,
    width:220,
    borderWidth: 2,
    borderColor: "#0f0101",
    backgroundColor: '#37e021',
   textAlign: "center",

    
    
   }, 

   title: {
    fontSize:24,
    color:'#2d0ddf'
   },
   
   btn: {
    backgroundColor: '#3e8ec4',
    padding: 10,
    borderRadius: 5,
    color:"#0c0c0c"
   }
 

});


