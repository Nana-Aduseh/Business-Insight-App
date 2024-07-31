import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name='angle-double-left' style={{ marginLeft: '3%'}} size={30}/>
      </TouchableOpacity>
      <Text style={styles.title}>Reports</Text>
      <ScrollView Vertical>
       <Text style={styles.subtitle}>Busiest Day;</Text>
       <Text style={styles.paragraph}>Friday stands out as the busiest day, recording a total of 8242 orders.
        Following closely behind is Saturday, with 7493 orders. Conversely, Sundays exhibit the lowest activity,
         with only 6035 orders.</Text>
      
      <Text style={styles.subtitle}>Most Profitable Day;</Text>
      <Text style={styles.paragraph}> Fridays also emerge as the most profitable days, generating sales worth $136,073.90,
        constituting 16.64% of total sales. Thursdays follow suit with sales totaling $412,528.50 (15.10%).
         In contrast, Sundays yield the least profit, with sales amounting to $99,203.50, contributing to 12.13% of total
          sales.</Text>

      <Text style={styles.subtitle}>Best & Worst Selling Pizza Size;</Text>
      <Text style={styles.paragraph}>The Large size pizza dominates sales, with 18,956 orders, closely trailed by the Medium 
       size with 15,635 orders. In contrast, the Extra Extra Large size registers the lowest demand, with only 28 orders.</Text>

      <Text style={styles.subtitle}>Best and Worst selling Pizzas;</Text>
      <Text style={styles.paragraph}>The Classic Deluxe Pizza leads as the best-selling option, with 2453 orders, closely
      followed by The Barbecue Chicken Pizza with 2432 orders. Conversely, The Brie Carre Pizza ranks as the least popular,
        with minimal sales</Text>

      <Text style={styles.subtitle}>Most and Least Profitable Pizzas;</Text>
      <Text style={styles.paragraph}>The Thai Chicken Pizza proves to be the most profitable, generating sales of $43,434.25, 
      constituting 5.31% of total sales. Following closely behind is The Barbecue Chicken Pizza, with sales totaling $42,763.00
       (5.23%). In contrast, The Brie Carre Pizza yields the lowest profit margins.</Text>  

      <Text style={styles.subtitle}>Busiest Hour:</Text>
      <Text style={styles.paragraph}>
      The hour around noon, specifically 12:00 PM, experiences the highest activity consistently across most days.
       This peak coincides with lunchtime, indicating a surge in orders during this period.Conversely, the least busy hour typically 
       falls around 9:00 AM.</Text>  
      <View style={{height:150}}></View>
      </ScrollView>
    </View>
  )
}

export default App

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
    textDecorationLine: 'underline',
  },
  subtitle:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:'5%',
  },
  paragraph:{
    fontSize:18,
    marginLeft:'8%',
    marginRight:'7%'
  },
  backButton: {
    marginTop:'2%'
  }
})