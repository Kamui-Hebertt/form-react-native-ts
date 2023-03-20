import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FieldName from './containers/nameForm';
import HereIsYourName from './containers/HereIsYourName';

export default function App() {
  const [nameinserted , setNameInserted] = useState<string>('');


const changeName = (newName:string):void =>{
  setNameInserted(newName);
}
const clearNameField = ():void =>{
  setNameInserted('');
}
  return (
    <View style={styles.container}>
        {nameinserted === '' && ( <FieldName onSend={changeName} /> )}
        {nameinserted !== '' && (<HereIsYourName names={nameinserted} clear={clearNameField} />)}
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    
    color:'#ffff',
    backgroundColor: '#c1d6c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
