import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTheme } from './ThemeContext';

type RootStackParamList = {
  MobileLegends: { image: any };
  FreeFire: { image: any };
  PUBGM: { image: any };
  CODM: { image: any };
};

const games: { id: number; title: string; screen: keyof RootStackParamList; image: any }[] = [
  {
    id: 1,
    title: 'Mobile Legends',
    screen: 'MobileLegends',
    image: require('./img/emel.jpeg'), // Path gambar
  },
  {
    id: 2,
    title: 'Free Fire',
    screen: 'FreeFire',
    image: require('./img/epep.jpeg'), // Path gambar
  },
  {
    id: 3,
    title: 'PUBGM',
    screen: 'PUBGM',
    image: require('./img/pubgm.jpeg'), // Path gambar
  },
  {
    id: 4,
    title: 'CODM',
    screen: 'CODM',
    image: require('./img/codm.jpeg'), // Path gambar
  },
];

export default function IDGLIST() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          style={styles.button}
          onPress={() => navigation.navigate(game.screen, { image: game.image })}
        >
          <Image source={game.image} style={styles.image} />
          <Text style={styles.buttonText}>{game.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6200ea',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
