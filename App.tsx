/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontFamily, FontSize } from './src/styles/typography';
import { moderateScale } from './src/styles/responsiveStyles';
import { CommonStyles, Spacing } from './src/styles/commonStyles';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { UserList } from './src/screens/UserList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <UserList />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
