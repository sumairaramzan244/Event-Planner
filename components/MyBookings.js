import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity } from 'react-native';

const bookings = [
  { id: '1', event: 'Concert', tickets: 2, date: '2024-09-01' },
  { id: '2', event: 'Art Exhibition', tickets: 1, date: '2025-03-12' },
   { id: '2', event: 'Tour ', tickets: 5, date: '2033-01-09' },
    { id: '2', event: 'Cultural Festival', tickets: 7, date: '2020-06-10' },
    
];

export default function MyBookings() {
  const [myBookings, setMyBookings] = useState(bookings);

  const handleCancelBooking = (id) => {
    alert("Are You Sure To Cancel The Bokking");
    setMyBookings(myBookings.filter(booking => booking.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myBookings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.bookingText}>{item.event}</Text>
            <Text style={styles.bookingText}>Tickets: {item.tickets}</Text>
            <Text style={styles.bookingText}>Date: {item.date}</Text>

 <TouchableOpacity style={styles.button} onPress={ handleCancelBooking}>
        <Text style={styles.buttonText}>Cancel Booking  </Text>
      </TouchableOpacity>          </View>

         
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'pink'
  },
  bookingItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor:  'lightgrey',
    borderRadius: 8,
  },
  bookingText: {
    fontSize: 16,
    marginBottom: 8,
  
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
     textAlign:'center',
  },
});