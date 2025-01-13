import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { useTheme } from '../ThemeContext';

export default function DeveloperScreen() {
  const [contactMessage, setContactMessage] = useState('');
  const { theme, toggleTheme } = useTheme();

  const hobbies = [
    { id: '1', title: 'Gaming', image: require('../img/game.jpeg') },
    { id: '2', title: 'Coding', image: require('../img/coding.jpeg') },
    { id: '3', title: 'Reading Manga', image: require('../img/read.jpeg') },
    { id: '4', title: 'Music', image: require('../img/music.jpeg') },
  ];

  const skills = [
    { id: '1', name: 'React Native', level: 0.1 },
    { id: '2', name: 'JavaScript', level: 0.3 },
    { id: '3', name: 'UI/UX Design', level: 0.5 },
    { id: '4', name: 'PHP', level: 0.6 },
  ];

  const handleContactFormSubmit = () => {
    // Add your form submission logic here
    alert(`Pesan berhasil dikirim: ${contactMessage}`);
    setContactMessage('');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      {/* Header with Photo and Name */}
      <View style={styles.header}>
        <Image source={require('../img/me.jpeg')} style={styles.profileImage} />
        <Text style={[styles.name, { color: theme.headingColor }]}>Naufal Rifki Nugraha</Text>
        <Text style={[styles.details, { color: theme.headingColor }]}>Sistem Informasi, Semester 5 - Masoem University</Text>
      </View>

      {/* Hobbies Section */}
      <Text style={[styles.sectionTitle, { color: theme.headingColor }]}>Hobbies</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <Image source={item.image} style={styles.hobbyImage} />
            <Text style={[styles.hobbyTitle, { color: theme.headingColor }]}>{item.title}</Text>
          </View>
        )}
      />

      {/* Skills Section */}
      <Text style={[styles.sectionTitle, { color: theme.headingColor }]}>Skills</Text>
      <View>
        {skills.map((skill) => (
          <View key={skill.id} style={styles.skillContainer}>
            <Text style={[styles.skillName, { color: theme.headingColor }]}>{skill.name}</Text>
            <Progress.Bar
              width={200}
              indeterminate={false}
              progress={skill.level}
              color="#6200EE"
            />
          </View>
        ))}
      </View>

      {/* Contact Form Section */}
      <Text style={[styles.sectionTitle, { color: theme.headingColor }]}>Contact Me</Text>
      <View style={styles.contactForm}>
        <TextInput
          style={[styles.input, { color: theme.headingColor }]}
          placeholder="Enter your message"
          value={contactMessage}
          onChangeText={setContactMessage}
        />
        <Button title="Send" onPress={handleContactFormSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#333',
  },
  hobbyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  hobbyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  hobbyTitle: {
    fontSize: 14,
    color: '#555',
  },
  skillContainer: {
    marginBottom: 16,
  },
  skillName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    width: 'auto'
  },
  contactForm: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
});
