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

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[CommonStyles.container]}>
      <Text
        style={{
          fontFamily: FontFamily.FONT_FAMILY_PRIMARY_BOLD,
          fontSize: FontSize.S_10,
        }}
      >
        Welcome to React Native!
      </Text>
      <NewAppScreen templateFileName="App.tsx" safeAreaInsets={safeAreaInsets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: Spacing.p(100) as number,
  },
});

export default App;
