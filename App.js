import React from 'react'
import { Platform } from 'expo-modules-core';
import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Players from './screens/Players';
import Teams from './screens/Teams'

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {{
            tabBarAllowFontScaling: true,
            tabBarLabelStyle: {
              fontSize: 18,
              marginBottom: 15,
            },
            tabBarIcon: ({ focused, color, size }) => {
              return
            }
          }}
          >
          <Tab.Screen name="Players" component={Players}/>
          <Tab.Screen name="Teams" component={Teams} />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#3B3B3B',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


