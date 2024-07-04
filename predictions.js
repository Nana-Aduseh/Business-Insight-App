import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native'
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
      <Text style={styles.title}>Predictions</Text>
      <ScrollView>
      <Text style={styles.subtitle}>Continued Dominance of Fridays: </Text>
      <Text style={styles.paragraph}>Given that Fridays consistently emerge as the busiest and 
      most profitable days, it is anticipated that this trend will persist. Factors such as the end of the workweek and 
      increased social activities may contribute to sustained high demand on Fridays</Text>

      <Text style={styles.subtitle}>Steady Sales Growth on Saturdays: </Text>
      <Text style={styles.paragraph}> Saturdays closely follow Fridays in terms of order quantity, 
      suggesting a strong consumer demand during the weekend. It is predicted that sales on Saturdays will continue to grow
       steadily, possibly rivaling or even surpassing those of Fridays in the future.</Text>

       <Text style={styles.subtitle}>Potential Sunday Sales Optimization:</Text>
      <Text style={styles.paragraph}>With Sundays consistently exhibiting lower activity and 
      profitability, there is an opportunity for strategic initiatives aimed at boosting sales on this day. Introducing special
       promotions or marketing campaigns tailored to Sunday customers may help optimize sales and improve profitability.</Text>

       <Text style={styles.subtitle}>Persistent Popularity of Large Pizza Sizes:</Text>
      <Text style={styles.paragraph}> The dominance of Large pizza sizes in sales indicates
       a strong preference among customers. It is forecasted that Large pizzas will continue to be the preferred choice,
        potentially prompting further exploration of product offerings in this size category</Text>

        <Text style={styles.subtitle}>Varied Performance of Pizza Varieties:</Text>
      <Text style={styles.paragraph}> The performance of different pizza varieties highlights 
      consumer preferences and trends. Pizzas such as the Classic Deluxe and Thai Chicken consistently perform well, 
      suggesting continued popularity. Conversely, pizzas like the Brie Carre may require reassessment or refinement to improve
       sales performance.</Text>

       <Text style={styles.subtitle}>Lunchtime Surge in Orders:</Text>
      <Text style={styles.paragraph}>  The peak in order activity around noon, particularly on most days,
       indicates a strong correlation with lunchtime.It is predicted that this trend will persist, with lunchtime continuing to be
        a key period for high order volumes.Businesses may leverage this insight to optimize staffing and operational efficiency 
        during peak hours.</Text>
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
    marginBottom:'2%'
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