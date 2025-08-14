import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity  } from 'react-native';

export default function CreateEvent() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function  handleCreateEvent() {
    alert("Event is created ");
     const data ={
       name:name,
       date:date ,
       location:location ,
       description:description,


    }
    
    fetch('https://mobilecomputingassignmnet-default-rtdb.firebaseio.com//CreateEvent.json', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

  }
    
  //    addEvent({ name: eventName, date: eventDate });
  //   setEventName('');
  //   setEventDate('');
  // // console.log("Event is created ");
  
  //   console.log('Event Created:', { name, date, location, description });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Event Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.description}>Event Date:</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />
      <Text style={styles.description} >Event Location:</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />
      <Text style={styles.description} >Event Description:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      
      <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
        <Text style={styles.buttonText}>Create Event </Text>
      </TouchableOpacity>
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'mistyrose'
  },
    description:{
fontWeight:'bold',
fontSize:20,
    },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor:'lightgrey'
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
    textAlign:'center'
  },
  

});
