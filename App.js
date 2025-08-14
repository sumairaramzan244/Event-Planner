import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import BuyTicket from './components/BuyTickets';
import MyBookings from './components/MyBookings';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const buttonHandler = () => {
    navigation.navigate('Events');
    // console.log("Welcome to Home Screen");
  };

  return (
    
    <View style={styles.content}>
      <Text style={styles.title}>Online Ticket Booking</Text>

      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn9eP8Y1t-bxqvnoDD7lTdDCjF6Mg0_d1qw&s' }} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={buttonHandler}>
        <Text style={styles.buttonText}>Click For Your Booking </Text>
      </TouchableOpacity>
    </View>
  );
}

function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventList" component={EventList} options={{ title: 'Events' }} />
      <Stack.Screen name="BuyTicket" component={BuyTicket} options={{ title: 'Buy Ticket' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Events" component={EventStack} />
        <Drawer.Screen name="CreateEvent" component={CreateEvent} options={{ title: 'Create Event' }} />
        <Drawer.Screen name="MyBookings" component={MyBookings} options={{ title: 'My Bookings' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#F5FCFF',
  // },
  // header: {
  //   height: 60,
  //   width: '100%',
  //   backgroundColor: '#007BFF',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // headerText: {
  //   color: '#FFFFFF',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 30,
    justifyContent:'center',
    borderRadius:8,
  
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
