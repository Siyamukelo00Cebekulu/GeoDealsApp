import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6B6B', // Header background color
          },
          headerTintColor: '#fff', // Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Hot Deals Near Me', headerStyle: { backgroundColor: '#FFD93D' }, headerTintColor: '#000' }}
        />
        <Stack.Screen
          name="Subscription"
          component={SubscriptionScreen}
          options={{ title: 'Choose Plan', headerStyle: { backgroundColor: '#6BCB77' }, headerTintColor: '#fff' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Choose Plan', headerStyle: { backgroundColor: '#6BCB77' }, headerTintColor: '#fff' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
