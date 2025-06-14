import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons set

const DealCard = ({ deal }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Text style={styles.title}>{deal.title || 'Local Special'}</Text>
      
      <View style={styles.row}>
        <Icon name="business-outline" size={18} color="#34495e" />
        <Text style={styles.business}>{deal.business}</Text>
      </View>
      
      <View style={styles.row}>
        <Icon name="pricetag-outline" size={18} color="#27ae60" />
        <Text style={styles.price}>{deal.price}</Text>
      </View>
      
      <View style={styles.row}>
        <Icon name="location-outline" size={16} color="#7f8c8d" />
        <Text style={styles.distance}>{deal.distance}</Text>
      </View>
      
      <Text style={styles.description}>{deal.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#d35400', // warmer orange
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  business: {
    fontSize: 15,
    color: '#34495e',
    marginLeft: 6,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: '700',
    marginLeft: 6,
  },
  distance: {
    fontSize: 13,
    color: '#7f8c8d',
    marginLeft: 6,
  },
  description: {
    fontSize: 15,
    color: '#2c3e50',
    marginTop: 10,
  },
});

export default DealCard;
r