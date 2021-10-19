import React, { memo } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Routes from '../utils/Route';
import { Colors } from '../configs';
import utils from '../navigations/utils';

const Stack = createStackNavigator();

const screenOptionsAccountSetting = {
  headerTintColor: '#000',
  headerBackTitle: true,
  headerStyle: {
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    backgroundColor: Colors.Gray2,
  },
};

export const HTStack = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...utils.screenOptions,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.White,
          elevation: 0,
          borderBottomWidth: Platform.OS === 'android' ? 1 : 0,
          borderColor: Colors.Gray4,
        },
        headerBackTitle: true,
        ...screenOptionsAccountSetting,
      }}
    >
      <Stack.Screen
        name={Routes.Dashboard}
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});
