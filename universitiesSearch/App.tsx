import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainerWrapper } from './src/NavigationContainerWrapper';
import 'react-native-gesture-handler';

export const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainerWrapper />
    </SafeAreaProvider>
  )
}
