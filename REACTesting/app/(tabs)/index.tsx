import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.heading, { color: theme.headingColor }]}>Home Screen</Text>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Welcome to the Home Screen!
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Light Theme" onPress={() => toggleTheme('light')} />
        <Button title="Dark Theme" onPress={() => toggleTheme('dark')} />
        <Button title="Custom Theme" onPress={() => toggleTheme('custom')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
