import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DealCard = ({ deal }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{deal.title || 'Local Special'}</Text>
      <Text style={styles.business}>{deal.business}</Text>
      <Text style={styles.price}>{deal.price}</Text>
      <Text style={styles.distance}>{deal.distance}</Text>
      <Text style={styles.description}>{deal.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#e67e22',
  },
  business: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 5,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  distance: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#34495e',
  },
});

export default DealCard;