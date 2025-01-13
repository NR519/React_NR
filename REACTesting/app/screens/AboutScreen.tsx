import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.heading, { color: theme.headingColor }]}>Tentang Aplikasi Ini</Text>
      <Text style={[styles.text, { color: theme.textColor, textAlign: 'justify' }]}>
Selamat datang di aplikasi Pengecek ID Game, sebuah aplikasi sederhana yang dikembangkan menggunakan React Native (Expo). Aplikasi ini bertujuan untuk mempermudah pengguna dalam memeriksa ID game mereka dengan cepat dan praktis. Proyek ini dibuat sebagai bagian dari tugas UAS mata kuliah Pemrograman Web 2 yang diampu oleh Bapak Iin Solihin.  

Aplikasi ini dikembangkan oleh Naufal Rifki Nugraha, mahasiswa program studi Sistem Informasi semester 5 di Masoem University. Semoga aplikasi ini tidak hanya menjadi solusi bagi kebutuhan pengguna, tetapi juga menjadi langkah penting dalam perjalanan pengembangan perangkat lunak. Terima kasih atas dukungannya! 😊
      </Text>
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
  },
});
