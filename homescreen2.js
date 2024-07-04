import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const menuItems = [
    { id: '1', name: "Bavy's Pizza" },
    { id: '2', name: "Bavy's Fashion" },
    { id: '3', name: "Bavy's Hostel" }
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
      <Text style={styles.dropdownItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleMenuItemPress = (item) => {
    console.log('Selected Menu Item:', item);
    toggleModal();
    
    if (item.name === "Bavy's Fashion") {
      navigation.navigate('HomeScreen2');
    }
    else if (item.name === "Bavy's Pizza") {
      navigation.navigate('Home');
    }
  };

  const handleUserIconPress = () => {
    console.log('User Icon Pressed');
    toggleModal();
  };

  const handleCompanyNamePress = () => {
    console.log('Company Name Pressed');
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: '5%' }}>
            <Text style={styles.title}>Business</Text>
            <Text style={styles.title1} onPress={handleUserIconPress}>Insight</Text>
          </View>
          <TouchableOpacity onPress={handleUserIconPress}>
            <Icon name="user-circle-o" style={{ marginTop: '18%', marginLeft: '65%', color: 'white' }} size={34} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleCompanyNamePress}>
          <Text style={styles.name}>Bavy's Fashion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./images/background.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Analysis')}
          >
            <View style={styles.overlayContent}>
              <Icon name="bar-chart" style={styles.overlayIcon} size={35} />
              <Text style={styles.overlayText}>Analysis</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Report')}
          >
            <View style={styles.overlayContent2}>
              <Icon name="book" style={styles.overlayIcon} size={35} />
              <Text style={styles.overlayText}>Report</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Predictions')}
          >
            <View style={styles.overlayContent2}>
              <Icon name="line-chart" style={styles.overlayIcon} size={35} />
              <Text style={styles.overlayText}>Predictions</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

     
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            <FlatList
              data={menuItems}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4A99C6',
    padding: 20,
    paddingBottom: 20,
    height: '25%'
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: '10%',
    fontWeight: 'bold'
  },
  title1: {
    color: 'white',
    fontSize: 35,
    marginTop: '2%',
    fontWeight: 'bold'
  },
  name: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '6%',
    // textDecorationLine:'underline',
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  overlayContent: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: '88%',
    paddingTop: 35, paddingBottom: 8, paddingLeft: 20,
    marginVertical: 30,
    alignItems: 'left',
    marginTop: 30
  },
  overlayContent2: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: '88%',
    paddingTop: 35, paddingBottom: 8, paddingLeft: 20,
    marginVertical: 30,
    alignItems: 'left',
    marginTop: 18
  },
  overlayText: {
    color: 'black',
    fontSize: 30,
    marginLeft: 10,
  },

  touchable: {
    width: '100%',
    alignItems: 'center',
  },

  // Dropdown Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: 200,
    width: '80%',
  },
  dropdownItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
  closeButton: {
    color: 'blue',
    marginTop: 20,
  },
});
