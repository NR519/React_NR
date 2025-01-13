import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const MobileLegendsChecker = () => {
  const [gameId, setGameId] = useState('');
  const [serverId, setserverId] = useState('');
  const [result, setResult] = useState<{
    id?: string;
    server?: string;
    username?: string;
    region?: string;
    error?: string;
  } | null>(null);

  const checkMobileLegendsId = async () => {
    const options = {
      method: 'GET',
      url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${gameId}/${serverId}`,
      headers: {
        'x-rapidapi-key': '7d0c8f6b46mshe8caa2cf730e60dp1ac521jsnb7943ef0a9f3', // Ganti dengan API Key Anda
        'x-rapidapi-host': 'id-game-checker.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const { data } = response.data; // Ambil hanya bagian 'data'
      setResult({
        id: data.id,
        server: data.server,
        username: data.username,
        region: data.region,
      });
    } catch (error) {
      console.error(error);
      setResult({ error: 'Unable to fetch data. Please check your inputs.' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Legends ID Checker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Game ID"
        value={gameId}
        onChangeText={setGameId}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Server ID"
        value={serverId}
        onChangeText={setserverId}
      />
      <Button title="Check ID" onPress={checkMobileLegendsId} />
      {result && (
        <View style={styles.resultContainer}>
          {result.error ? (
            <Text style={styles.errorText}>{result.error}</Text>
          ) : (
            <>
              <Text style={styles.resultText}>ID: {result.id}</Text>
              <Text style={styles.resultText}>Server: {result.server}</Text>
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

export default MobileLegendsChecker;
