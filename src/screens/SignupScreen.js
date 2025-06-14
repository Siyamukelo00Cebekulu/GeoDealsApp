import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolateColor,
  Easing,
} from 'react-native-reanimated';

const SignupScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [goals, setGoals] = useState('');
  const email = route?.params?.email || '';

  const glow = useSharedValue(0);

  useEffect(() => {
    glow.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const animatedTitleStyle = useAnimatedStyle(() => {
    const color = interpolateColor(glow.value, [0, 1], ['#00f0ff', '#FF6EC7']);
    return { color };
  });

  const handleSignup = () => {
    if (!name.trim() || !location.trim() || !ageGroup.trim()) {
      Alert.alert('Missing Info', 'Please fill in all required fields.');
      return;
    }

    const user = {
      email,
      name,
      interests: interests.split(',').map(i => i.trim()),
      location,
      ageGroup,
      goals,
      subscription: 'Basic',
    };

    console.log('✅ New user:', user);
    Alert.alert('Account Created', 'Your account has been set up!');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.Text style={[styles.title, animatedTitleStyle]}>
          🚀 Create Your Account
        </Animated.Text>
        <Text style={styles.subtitle}>Let’s personalize your experience</Text>

        <Text style={styles.label}>Email (auto-filled)</Text>
        <Text style={styles.staticText}>{email}</Text>

        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Thando Mokoena"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Location *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Mofolo North, Soweto"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Age Group *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 18–25, 26–35"
          value={ageGroup}
          onChangeText={setAgeGroup}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Your Interests</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. food, fashion, tech"
          value={interests}
          onChangeText={setInterests}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>What are you hoping to find on this app?</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="e.g. affordable events, best kota spots"
          value={goals}
          onChangeText={setGoals}
          multiline
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0F111A',
  },
  container: {
    padding: 24,
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#00ffff',
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 },
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    color: '#ddd',
    fontWeight: '600',
  },
  staticText: {
    fontSize: 15,
    marginBottom: 15,
    color: '#ccc',
    backgroundColor: '#1F1F1F',
    padding: 10,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#00f0ff',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#00f0ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#0F111A',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignupScreen;
