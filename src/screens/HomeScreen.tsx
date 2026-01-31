import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../constants/Screens'; // Ensure correct path
import { TouchableOpacity, Text } from 'react-native';

export const HomeScreen = () => {
  // Pass the type directly to the hook
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Screens.Main.USER_LIST)}>
      <Text>Go to User List</Text>
    </TouchableOpacity>
  );
};
