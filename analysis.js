import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name='angle-double-left' style={{ marginLeft: '3%'}} size={30}/>
      </TouchableOpacity>
      <Text style={styles.title}>Top Analysis</Text>
      <ScrollView Vertical>
        <Text style={styles.subtitle}>Busiest days</Text>
        <Image source={require('./images/busy.jpg')} style={styles.image} ></Image>
        <Text style={styles.subtitle}>Income per day</Text>
        <Image source={require('./images/income.jpg')} style={styles.image}></Image>
        <Text style={styles.subtitle}>Best selling sizes</Text>
        <Image source={require('./images/size.jpg')} style={styles.image1}></Image>
        <Text style={styles.subtitle2}>Busiest Hours</Text>
        <Image source={require('./images/heat.jpg')} style={styles.image3}></Image>
        <Text style={styles.subtitle}>Best and worst selling pizzas</Text>
        <Image source={require('./images/selling1.jpg')} style={styles.image2} resizeMode='contain' ></Image>
        <Text style={styles.subtitle}>Best and worst profitable pizzas</Text>
        <Image source={require('./images/profit.jpg')} style={styles.image2} resizeMode='contain'  ></Image>
        <View style={{height:150}}></View>
      </ScrollView>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'5%',
    color: 'white',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    marginLeft:'5%',
    marginBottom:'2%',
    textDecorationLine: 'underline'
  },
  image:{
    marginBottom:'2%',
    width:390,
    resizeMode:'contain',
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
  subtitle:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  subtitle2:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    marginBottom:-30,
    marginTop:10
  },
  image1:{
    marginBottom:'2%',
    width:420,
    height:300,
    alignItems:'center',
    justifyContent:'center'
  },
  image2:{
    marginBottom:'2%',
    width:450,
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
  image3:{
    width:490,
    marginLeft:-25,
    height:300,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center'
  },
  backButton: {
    marginTop:'2%'
  }
});
