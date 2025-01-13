import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ThemeContextProvider, { useTheme } from '../ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ThemeScreen from '../screens/ThemeScreen';
import GameStack from '../GameStack';
import DeveloperScreen from '../screens/DevScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <ThemedDrawer />
    </ThemeContextProvider>
  );
}

function ThemedDrawer() {
  const { theme } = useTheme();

  return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.headingColor }, // Adjust header color
          headerTintColor: theme.textColor, // Adjust header text color
          drawerStyle: {
            backgroundColor: theme.backgroundColor, // Drawer background color
          },
          drawerActiveTintColor: theme.headingColor, // Active drawer item text color
          drawerInactiveTintColor: theme.textColor, // Inactive drawer item text color
        }}
      >
        <Drawer.Screen name="IDGameChecker" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Dev CV" component={DeveloperScreen} />
        <Drawer.Screen name="ID Game List" component={GameStack} />
        <Drawer.Screen name="Theme" component={ThemeScreen} />
      </Drawer.Navigator>
  );
}
