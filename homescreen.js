import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: '5%' }}>
            <Text style={styles.title}>Business</Text>
            <Text style={styles.title1}>Insight</Text>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="user-circle-o" style={{ marginTop: '18%', marginLeft: '65%', color: 'white' }} size={34} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Bavy's Pizza</Text>
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
          <View style={styles.modalContent}>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline'}}>Company Information</Text>
            <Text>Name: Bavy's Pizza</Text>
            <Text>Email: bavyspizza@pizza.com</Text>
            <Text>Phone: +1234567890</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
              <TouchableOpacity>
              <Text onPress={() => navigation.navigate('Login')} style={{ color: 'blue', marginTop: 10 }}>Logout</Text>
              </TouchableOpacity>
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

