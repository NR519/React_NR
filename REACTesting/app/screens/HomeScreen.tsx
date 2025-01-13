import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function HomeScreen() {
  const { theme, currentTheme } = useTheme();  // Ambil tema dan currentTheme dari context

  // Menentukan logo yang akan ditampilkan berdasarkan currentTheme
  const logoSource = currentTheme === 'dark' ? require('../img/logo.jpeg') : require('../img/logo.png');

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Image source={logoSource} style={styles.logo}/>
      <Text style={[styles.heading, { color: theme.headingColor }]}>
        Selamat Datang di Aplikasi ID Game Checker
      </Text>
      <Text style={[styles.subheading, { color: theme.textColor }]}>
        Mudahnya mengecek ID game favoritmu hanya dalam satu aplikasi.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
  },
});
