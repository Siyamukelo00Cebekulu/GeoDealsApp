import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DealCard from '../components/DealCard';

const HomeScreen = ({ navigation }) => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDeals();
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const fetchDeals = () => {
    // Soweto-themed deals in Rands
    const mockDeals = [
      {
        id: 1,
        title: 'Vilakazi Street Special',
        description: 'Buy 1 kota get 1 free',
        price: 'R45',
        distance: '0.5 km away',
        business: 'Sakhumzi Restaurant',
      },
      {
        id: 2,
        title: 'Maboneng Market Deal',
        description: '20% off all African crafts',
        price: 'From R120',
        distance: '1.2 km away',
        business: 'Maboneng Precinct',
      },
      {
        id: 3,
        description: 'Free shisanyama with 2 drinks',
        price: 'R99',
        distance: '0.8 km away',
        business: 'Chaf Pozi',
      },
      {
        id: 4,
        title: 'Orlando Towers Special',
        description: '15% off bungee jumping',
        price: 'R850 (normally R1000)',
        distance: '2.1 km away',
        business: 'Orlando Towers',
      },
      {
        id: 5,
        title: 'Credo Mutwa Village',
        description: 'Free guided tour with museum entry',
        price: 'R50',
        distance: '1.5 km away',
        business: 'Credo Mutwa Cultural Village',
      },
    ];
    setDeals(mockDeals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Deals in Soweto</Text>
      
      {isLoading ? (
        <Text>Loading local deals...</Text>
      ) : (
        <>
          <FlatList
            data={deals}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <DealCard deal={item} />}
            ListEmptyComponent={<Text>No deals available</Text>}
          />
          <TouchableOpacity
            style={styles.subscriptionButton}
            onPress={() => navigation.navigate('Subscription')}
          >
            <Text style={styles.subscriptionButtonText}>View Subscription Options</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subscriptionButton: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  subscriptionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;