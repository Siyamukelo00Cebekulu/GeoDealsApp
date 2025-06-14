import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { ZoomIn } from 'react-native-reanimated';

const SubscriptionScreen = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const subscriptionTiers = [
    {
      id: 1,
      name: 'Basic',
      price: 'R92.32/month', // 4.99 * 18.5
      features: ['5 deals per day', 'Local deals only'],
      icon: 'star-outline',
      iconColor: '#4CAF50',
    },
    {
      id: 2,
      name: 'Premium',
      price: 'R184.82/month', // 9.99 * 18.5
      features: ['10 deals per day', 'Regional deals', 'Exclusive offers'],
      icon: 'star-half-full',
      iconColor: '#FFB300',
    },
    {
      id: 3,
      name: 'VIP',
      price: 'R277.36/month', // 14.99 * 18.5
      features: ['Unlimited deals', 'National deals', 'Exclusive offers', 'Early access'],
      icon: 'star',
      iconColor: '#E65100',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Subscription</Text>

      {subscriptionTiers.map((tier, index) => (
        <Animated.View
          key={tier.id}
          entering={ZoomIn.delay(index * 150)}
          style={[
            styles.tierCard,
            selectedTier === tier.id && styles.selectedTier,
          ]}
        >
          <TouchableOpacity
            onPress={() => setSelectedTier(tier.id)}
            activeOpacity={0.8}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <MaterialCommunityIcons
              name={tier.icon}
              size={32}
              color={tier.iconColor}
              style={{ marginRight: 15 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.tierName}>{tier.name}</Text>
              <Text style={styles.tierPrice}>{tier.price}</Text>
              {tier.features.map((feature, i) => (
                <View key={i} style={styles.featureRow}>
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={16}
                    color={selectedTier === tier.id ? '#4CAF50' : '#666'}
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.tierFeature}>{feature}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}

      <TouchableOpacity
        style={[
          styles.subscribeButton,
          !selectedTier && { backgroundColor: '#A5D6A7' },
        ]}
        disabled={!selectedTier}
      >
        <Text style={styles.subscribeButtonText}>
          {selectedTier
            ? `Subscribe to ${subscriptionTiers.find(t => t.id === selectedTier).name}`
            : 'Select a plan'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB', // soft light color, very subtle pastel gray-blue
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  tierCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  selectedTier: {
    borderColor: '#4CAF50',
    borderWidth: 2,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  tierName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: '#222',
  },
  tierPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 8,
  },
  tierFeature: {
    fontSize: 14,
    color: '#555',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  subscribeButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default SubscriptionScreen;
