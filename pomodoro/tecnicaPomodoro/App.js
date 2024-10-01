import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';

const colors =["#D7BDE2","#F7DC6F", "#A2D9CE" ]

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO"|"SHORT"|"BREAK");

  return (
    <View style={styles.container}>
      <Text style={styles.text} >POMODORO!</Text>
      <StatusBar style='auto' />
      <Header time={time}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors[0],
    paddingTop:60,
  },
  text:{
    fontSize:32,
    fontWeight:"bold",
    textAlign: "center",
    color: "purple",
  }
});
