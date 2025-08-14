import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const events = [
  { id: '1', name: 'Concert', date: '2024-09-01', location: 'City Hall' },
  { id: '2', name: 'Art Exhibition', date: '2024-04-10', location: 'Art Gallery' },
  { id: '3', name: 'Mella ', date: '2025-04-18', location: 'Museum' },
  { id: '4', name: 'Hockey', date: '2026-09-15', location: 'Golf Club' },

];

export default function EventList({navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventText}>{item.name}</Text>
            <Text style={styles.eventText}>{item.date}</Text>
            <Text style={styles.eventText}>{item.location}</Text>

            <Button style={styles.button} title="Buy Ticket" onPress={() => navigation.navigate('BuyTicket', { event: item })} />
          </View>
        )}
      />
    </View>
    
  );
}














const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'mistyrose'

  },
  eventItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    borderColor:'black'
  },
  eventText: {
    fontSize: 20,
    marginBottom: 10,
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
