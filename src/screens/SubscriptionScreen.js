import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubscriptionScreen = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const subscriptionTiers = [
  {
    id: 1,
    name: 'Basic',
    price: 'R92.32/month', // 4.99 * 18.5
    features: ['5 deals per day', 'Local deals only'],
  },
  {
    id: 2,
    name: 'Premium',
    price: 'R184.82/month', // 9.99 * 18.5
    features: ['10 deals per day', 'Regional deals', 'Exclusive offers'],
  },
  {
    id: 3,
    name: 'VIP',
    price: 'R277.36/month', // 14.99 * 18.5
    features: ['Unlimited deals', 'National deals', 'Exclusive offers', 'Early access'],
  },
];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Subscription</Text>
      {subscriptionTiers.map(tier => (
        <TouchableOpacity
          key={tier.id}
          style={[
            styles.tierCard,
            selectedTier === tier.id && styles.selectedTier,
          ]}
          onPress={() => setSelectedTier(tier.id)}
        >
          <Text style={styles.tierName}>{tier.name}</Text>
          <Text style={styles.tierPrice}>{tier.price}</Text>
          {tier.features.map((feature, index) => (
            <Text key={index} style={styles.tierFeature}>
              • {feature}
            </Text>
          ))}
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.subscribeButton}
        disabled={!selectedTier}
      >
        <Text style={styles.subscribeButtonText}>
          {selectedTier ? `Subscribe to ${subscriptionTiers.find(t => t.id === selectedTier).name}` : 'Select a plan'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tierCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedTier: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  tierName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tierPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
  },
  tierFeature: {
    fontSize: 14,
    marginBottom: 3,
  },
  subscribeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscriptionScreen;