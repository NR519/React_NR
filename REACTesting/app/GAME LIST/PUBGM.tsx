import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';

type RootStackParamList = {
  PUBGM: { image: any };
};

const PUBGM = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PUBGM'>>();
  const { image } = route.params; // Ambil gambar dari parameter navigasi

  const [userId, setUserId] = useState('');
  const [result, setResult] = useState<{
    userId?: string;
    username?: string;
    error?: string;
  } | null>(null);

  const checkPUBGMId = async () => {
    if (!userId) {
      setResult({ error: 'Please enter a valid UID.' });
      return;
    }

    const options = {
      method: 'GET',
      url: `https://id-game-checker.p.rapidapi.com/pubgm-global/${userId}`,
      headers: {
        'x-rapidapi-key': '7a8adad256msh8574e498167a156p157a0bjsn8ed75b8542ea',
        'x-rapidapi-host': 'id-game-checker.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const { data } = response.data;
      setResult({
        userId: data.id,
        username: data.username,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setResult({ error: 'Unable to fetch data. Please check your inputs.' });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>PUBGM ID Checker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter UID"
        value={userId}
        onChangeText={setUserId}
      />
      <Button title="Check ID" onPress={checkPUBGMId} />
      {result && (
        <View style={styles.resultContainer}>
          {result.error ? (
            <Text style={styles.errorText}>{result.error}</Text>
          ) : (
            <>
              <Text style={styles.resultText}>ID: {result.userId}</Text>
              <Text style={styles.resultText}>Username: {result.username}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default PUBGM;
