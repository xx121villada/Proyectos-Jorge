import React,  {useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import Header from '../../components/header/Header'
import fetchapi from '../../utils/fetch'
import TodaysImage from '../../components/todaysImage'


function Home() {
  const [todaysImage, setTodaysImage] = useState([])
    useEffect(() => {
        const loadTodaysImage = async () => {
        try{
            const todaysImageResponse = await fetchapi();
            setTodaysImage(todaysImageResponse)
        }catch(error){
            setTodaysImage(undefined)
            console.log("Se produjo el siguiente error", error)
        }
    }
    loadTodaysImage().catch(null)
},[])
    console.log(todaysImage)
  return (
    <View styles={styles.container}>
        <Header/>
        <TodaysImage url={todaysImage.url} title={todaysImage.title} date={todaysImage.date}/>
        {/* <Text style={styles.titulo} >{todaysImage.title} </Text>
        <Image source ={{uri:todaysImage.url}} style={styles.imagen} /> */}
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingTop:55
    },
    imagen:{
      width:200,
      height:200,
    },
    titulo:{
      fontSize:20,
      color: '#fff'
    }
});