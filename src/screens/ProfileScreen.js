import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current; // initial opacity 0
  const scaleAnim = useRef(new Animated.Value(0.9)).current; // initial scale 0.9

  useEffect(() => {
    // Simulate fetching user data with more detailed dummy data
    const dummyUser = {
      email: 'siyamukelo@example.com',
      name: 'Siyamukelo Cebekulu',
      subscription: 'Premium',
      address: '123 Mofolo St, Soweto, Johannesburg',
      location: 'Soweto, South Africa',
      paymentMethods: [
        { id: '1', type: 'Visa', last4: '1234' },
        { id: '2', type: 'MasterCard', last4: '5678' },
      ],
      subscriptionPlan: {
        name: 'Premium',
        price: 'R184.82/month',
        perks: ['10 deals per day', 'Regional deals', 'Exclusive offers'],
      },
    };

    setTimeout(() => {
      setUser(dummyUser);

      // Run animation when data loads
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]).start();
    }, 800);
  }, []);

  if (!user) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* Email */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="email-outline"
            size={26}
            color="#4A90E2"
            style={styles.icon}
          />
          <Text style={styles.label}>{user.email}</Text>
        </View>

        {/* Name */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={26}
            color="#4A90E2"
            style={styles.icon}
          />
          <Text style={styles.label}>{user.name}</Text>
        </View>

        {/* Address */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={26}
            color="#E67E22"
            style={styles.icon}
          />
          <Text style={styles.label}>{user.address}</Text>
        </View>

        {/* Location */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="earth"
            size={26}
            color="#3498DB"
            style={styles.icon}
          />
          <Text style={styles.label}>{user.location}</Text>
        </View>

        {/* Subscription Plan */}
        <View style={[styles.row, { flexDirection: 'column', marginBottom: 20 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <MaterialCommunityIcons
              name="wallet-membership"
              size={26}
              color="#4CAF50"
              style={[styles.icon, { marginTop: 0 }]}
            />
            <Text style={[styles.label, { fontWeight: '700', fontSize: 20 }]}>
              {user.subscriptionPlan.name} Plan
            </Text>
          </View>
          <Text style={[styles.subLabel, { marginLeft: 36 }]}>
            Price: {user.subscriptionPlan.price}
          </Text>
          {user.subscriptionPlan.perks.map((perk, i) => (
            <Text key={i} style={[styles.subLabel, { marginLeft: 36 }]}>
              • {perk}
            </Text>
          ))}
        </View>

        {/* Payment Methods */}
        <Text style={[styles.label, { fontWeight: '700', fontSize: 20, marginBottom: 10 }]}>
          Payment Methods
        </Text>
        {user.paymentMethods.map((card) => (
          <View key={card.id} style={styles.paymentCard}>
            <MaterialCommunityIcons
              name={
                card.type.toLowerCase() === 'visa'
                  ? 'credit-card-outline'
                  : 'credit-card-chip'
              }
              size={24}
              color="#34495E"
              style={{ marginRight: 12 }}
            />
            <Text style={styles.paymentText}>
              {card.type} **** **** **** {card.last4}
            </Text>
          </View>
        ))}
      </Animated.View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => Alert.alert('Coming Soon', 'Edit Profile feature is coming soon!')}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons
          name="pencil-outline"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#F7FAFC',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#999',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2C3E50',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    marginRight: 12,
    marginTop: 1,
  },
  label: {
    fontSize: 16,
    color: '#34495E',
  },
  subLabel: {
    fontSize: 14,
    color: '#5D6D7E',
  },
  paymentCard: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 15,
    color: '#34495E',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 28,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  
});


export default ProfileScreen;
