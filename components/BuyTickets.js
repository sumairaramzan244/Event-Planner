import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

export default function BuyTicket({ route }) {
  const { event } = route.params;
  const [numTickets, setNumTickets] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleBuyTicket = () => {
    alert("Ticket is successfully booked");
    console.log('Ticket Booked:', { event, numTickets, userName, userEmail, paymentDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Event Name: {event.name}</Text>
      <Text style={styles.description}>Number of Tickets:</Text>
      <TextInput style={styles.input} value={numTickets} onChangeText={setNumTickets} />
      <Text style={styles.description}>User Name:</Text>
      <TextInput style={styles.input} value={userName} onChangeText={setUserName} />
      <Text style={styles.description}>User Email:</Text>
      <TextInput style={styles.input} value={userEmail} onChangeText={setUserEmail} />
      <Text style={styles.description}>Payment Details:</Text>
      <TextInput style={styles.input} value={paymentDetails} onChangeText={setPaymentDetails} />
     
    <View>
     
     
     <TouchableOpacity style={styles.button} onPress={handleBuyTicket}>
        <Text style={styles.buttonText}>Submit </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'mistyrose',
    
    
  },
  description:{
fontWeight:'bold',
fontSize:20,

  },
  input: {
    borderRadius:15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor:'lightgray',
      },
  button: {
   backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius:20,
    // borderWidth:10
    
  },
 buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign:'center'
  },
});
