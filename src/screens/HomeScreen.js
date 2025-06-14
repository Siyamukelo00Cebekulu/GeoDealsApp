import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeIn, ZoomIn, SlideInRight } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDeals();
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fetchDeals = () => {
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
        title: 'Shisanyama Lovers',
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

  const renderDealCard = ({ item, index }) => (
    <Animated.View entering={ZoomIn.delay(index * 120)} style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => alert(`Viewing: ${item.title}`)}
        style={{ flex: 1 }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.metaRow}>
          <MaterialCommunityIcons name="tag-outline" size={16} color="#27ae60" />
          <Text style={styles.metaText}>{item.price}</Text>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={16}
            color="#7f8c8d"
            style={{ marginLeft: 16 }}
          />
          <Text style={[styles.metaText, { color: '#7f8c8d' }]}>{item.distance}</Text>
        </View>

        <View style={[styles.metaRow, { marginTop: 6 }]}>
          <MaterialCommunityIcons name="storefront-outline" size={16} color="#34495e" />
          <Text style={[styles.metaText, { color: '#34495e', fontStyle: 'italic', marginLeft: 6 }]}>
            {item.business}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text entering={SlideInRight.duration(600)} style={styles.header}>
        🛍️ Today's Deals in Soweto
      </Animated.Text>

      <View style={styles.navButtons}>
        <TouchableOpacity
          style={[styles.navButton, styles.profileBtn]}
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="account-circle-outline" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.subscriptionBtn]}
          onPress={() => navigation.navigate('Subscription')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="wallet-membership" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Subscriptions</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6B6B" style={{ marginTop: 40 }} />
      ) : (
        <Animated.FlatList
          entering={FadeIn}
          data={deals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDealCard}
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F0', // soft peach background
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 20,
    color: '#D80032',
    textAlign: 'center',
    textShadowColor: '#80000044',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    gap: 12,
  },
  navButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  profileBtn: {
    backgroundColor: '#6A67CE',
  },
  subscriptionBtn: {
    backgroundColor: '#28B5B5',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 9,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2c3e50',
  },
  description: {
    fontSize: 14,
    color: '#5d6d7e',
    marginVertical: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 13,
    color: '#27ae60',
    marginLeft: 6,
  },
});

export default HomeScreen;
