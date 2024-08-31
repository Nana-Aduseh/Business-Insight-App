import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name='angle-double-left' size={30} color="#ffffff"/>
        </TouchableOpacity>
        <Text style={styles.title}>Predictions</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>Continued Dominance of Fridays:</Text>
        <Text style={styles.paragraph}>Given that Fridays consistently emerge as the busiest and most profitable days, it is anticipated that this trend will persist. Factors such as the end of the workweek and increased social activities may contribute to sustained high demand on Fridays.</Text>
        
        <Text style={styles.subtitle}>Steady Sales Growth on Saturdays:</Text>
        <Text style={styles.paragraph}>Saturdays closely follow Fridays in terms of order quantity, suggesting a strong consumer demand during the weekend. It is predicted that sales on Saturdays will continue to grow steadily, possibly rivaling or even surpassing those of Fridays in the future.</Text>

        <Text style={styles.subtitle}>Potential Sunday Sales Optimization:</Text>
        <Text style={styles.paragraph}>With Sundays consistently exhibiting lower activity and profitability, there is an opportunity for strategic initiatives aimed at boosting sales on this day. Introducing special promotions or marketing campaigns tailored to Sunday customers may help optimize sales and improve profitability.</Text>

        <Text style={styles.subtitle}>Persistent Popularity of Large Pizza Sizes:</Text>
        <Text style={styles.paragraph}>The dominance of Large pizza sizes in sales indicates a strong preference among customers. It is forecasted that Large pizzas will continue to be the preferred choice, potentially prompting further exploration of product offerings in this size category.</Text>

        <Text style={styles.subtitle}>Varied Performance of Pizza Varieties:</Text>
        <Text style={styles.paragraph}>The performance of different pizza varieties highlights consumer preferences and trends. Pizzas such as the Classic Deluxe and Thai Chicken consistently perform well, suggesting continued popularity. Conversely, pizzas like the Brie Carre may require reassessment or refinement to improve sales performance.</Text>

        <Text style={styles.subtitle}>Lunchtime Surge in Orders:</Text>
        <Text style={styles.paragraph}>The peak in order activity around noon, particularly on most days, indicates a strong correlation with lunchtime. It is predicted that this trend will persist, with lunchtime continuing to be a key period for high order volumes. Businesses may leverage this insight to optimize staffing and operational efficiency during peak hours.</Text>
        
        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#4A99C6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    marginTop:30
  },
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    color: '#333333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666666',
    marginBottom: 10,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
});

// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const App = () => {
//   const navigation = useNavigation();
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name='angle-double-left' size={30} color="#ffffff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Predictions</Text>
//       </View>

//       <ScrollView style={styles.scrollView}>
//         <TouchableOpacity onPress={() => toggleSection('section1')} style={styles.tab}>
//           <Text style={styles.subtitle}>Continued Dominance of Fridays</Text>
//           <Icon name={activeSection === 'section1' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section1' && (
//           <Text style={styles.paragraph}>
//             Given that Fridays consistently emerge as the busiest and most profitable days, it is anticipated that this trend will persist. Factors such as the end of the workweek and increased social activities may contribute to sustained high demand on Fridays.
//           </Text>
//         )}

//         <TouchableOpacity onPress={() => toggleSection('section2')} style={styles.tab}>
//           <Text style={styles.subtitle}>Steady Sales Growth on Saturdays</Text>
//           <Icon name={activeSection === 'section2' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section2' && (
//           <Text style={styles.paragraph}>
//             Saturdays closely follow Fridays in terms of order quantity, suggesting a strong consumer demand during the weekend. It is predicted that sales on Saturdays will continue to grow steadily, possibly rivaling or even surpassing those of Fridays in the future.
//           </Text>
//         )}

//         <TouchableOpacity onPress={() => toggleSection('section3')} style={styles.tab}>
//           <Text style={styles.subtitle}>Potential Sunday Sales Optimization</Text>
//           <Icon name={activeSection === 'section3' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section3' && (
//           <Text style={styles.paragraph}>
//             With Sundays consistently exhibiting lower activity and profitability, there is an opportunity for strategic initiatives aimed at boosting sales on this day. Introducing special promotions or marketing campaigns tailored to Sunday customers may help optimize sales and improve profitability.
//           </Text>
//         )}

//         <TouchableOpacity onPress={() => toggleSection('section4')} style={styles.tab}>
//           <Text style={styles.subtitle}>Persistent Popularity of Large Pizza Sizes</Text>
//           <Icon name={activeSection === 'section4' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section4' && (
//           <Text style={styles.paragraph}>
//             The dominance of Large pizza sizes in sales indicates a strong preference among customers. It is forecasted that Large pizzas will continue to be the preferred choice, potentially prompting further exploration of product offerings in this size category.
//           </Text>
//         )}

//         <TouchableOpacity onPress={() => toggleSection('section5')} style={styles.tab}>
//           <Text style={styles.subtitle}>Varied Performance of Pizza Varieties</Text>
//           <Icon name={activeSection === 'section5' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section5' && (
//           <Text style={styles.paragraph}>
//             The performance of different pizza varieties highlights consumer preferences and trends. Pizzas such as the Classic Deluxe and Thai Chicken consistently perform well, suggesting continued popularity. Conversely, pizzas like the Brie Carre may require reassessment or refinement to improve sales performance.
//           </Text>
//         )}

//         <TouchableOpacity onPress={() => toggleSection('section6')} style={styles.tab}>
//           <Text style={styles.subtitle}>Lunchtime Surge in Orders</Text>
//           <Icon name={activeSection === 'section6' ? 'angle-up' : 'angle-down'} size={20} color="#333" />
//         </TouchableOpacity>
//         {activeSection === 'section6' && (
//           <Text style={styles.paragraph}>
//             The peak in order activity around noon, particularly on most days, indicates a strong correlation with lunchtime. It is predicted that this trend will persist, with lunchtime continuing to be a key period for high order volumes. Businesses may leverage this insight to optimize staffing and operational efficiency during peak hours.
//           </Text>
//         )}

//         <View style={{ height: 150 }}></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     width: '100%',
//     height: 60,
//     backgroundColor: '#007BFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   title: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginLeft: 10,
//   },
//   scrollView: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//   },
//   tab: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     backgroundColor: '#e0e0e0',
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   subtitle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: '#333333',
//   },
//   paragraph: {
//     fontSize: 16,
//     lineHeight: 22,
//     color: '#666666',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   backButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
