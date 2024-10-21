import React from 'react'
import { View, StyleSheet, Image, Text, Button} from 'react-native'

function TodaysImage({date, title, url}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:url}} style={styles.image}/>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.date}>{date} </Text>
        <View style={styles.button}>
            <Button title='View'></Button> 
        </View>
    </View>
  )
}

export default TodaysImage

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#2c449d',
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingTop:20,
        borderRadius: 20
    },
    imageContainer:{
        borderWidth:3,
        borderRadius:20,
    },
    image:{
        width:"100%",
        height:400,
        borderWidth:2,
        borderRadius:20,
    },
    title:{
        fontSize:20,
        color: '#fff',
        justifyContent:'center',
        margin: 5,
        fontWeight: 'bold',
    },
    date:{
        fontSize:20,
        margin: 5,
        fontWeight: 'bold',
    },
    button:{
        alignItems: 'flex-end',
        margin:10,
    }
});