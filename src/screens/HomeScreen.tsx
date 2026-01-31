import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from '../constants/Screens';

// 1. Define your Navigation Param List
type RootStackParamList = {
  Login: undefined;
  EmployeeTabs: undefined; // Previously /(tabs)
  EmployerHome: undefined; // Previously /Employer
};

// 2. Define the Navigation Prop type for this screen
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// 3. Define User Interface
interface User {
  email: string;
  password: string;
  role: 'employer' | 'employee';
}

export const HomeScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Use the typed navigation hook
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = (): void => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    // Demo Users with Type
    const USERS: User[] = [
      {
        email: 'employer@test.com',
        password: '111111',
        role: 'employer',
      },
      {
        email: 'employee@test.com',
        password: '222222',
        role: 'employee',
      },
    ];

    const user = USERS.find((u) => u.email === email && u.password === password);

    if (!user) {
      Alert.alert('Error', 'Invalid email or password');
      return;
    }

    Alert.alert('Success', `Login as ${user.role}`);

    // React Navigation specific logic
    if (user.role === 'employee') {
      navigation.replace('EmployeeTabs');
    } else {
      navigation.replace('EmployerHome');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email or Username"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => {
              /* Navigate to Signup */
            }}
          >
            Create an Account
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },

  form: {
    marginTop: 16,
  },

  inputGroup: {
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 14,
  },

  buttonWrapper: {
    marginTop: 16,
  },

  button: {
    backgroundColor: '#0d6efd',
    paddingVertical: 14,
    borderRadius: 6,
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    marginTop: 40,
  },

  footerText: {
    textAlign: 'center',
    color: '#6c757d',
    fontSize: 14,
  },

  link: {
    fontWeight: '700',
    color: '#0d6efd',
  },
});
