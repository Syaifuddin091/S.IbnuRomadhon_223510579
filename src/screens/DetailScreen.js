import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Button, Divider } from 'react-native-paper';

const DetailScreen = ({ route, navigation }) => {
  const { bookTitle } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* Gambar Sampul Buku */}
        <Card.Cover source={{ uri: 'https://via.placeholder.com/600x300' }} />

        <Card.Title title={bookTitle} subtitle="Detailed View" style={styles.cardTitle} />

        {/* Deskripsi Buku */}
        <Card.Content>
          <Text variant="bodyLarge" style={styles.bookDescription}>
            This book is an essential guide to mastering React Native for mobile development.
            It covers all the key concepts and practical skills you need to build amazing mobile apps.
          </Text>
          <Divider style={styles.divider} />
          <Text variant="bodyMedium" style={styles.bookInfo}>
            Author: S.Ibnu Romadhon
          </Text>
          <Text variant="bodyMedium" style={styles.bookInfo}>
            Published: 2023
          </Text>
        </Card.Content>

        {/* Tombol Kembali */}
        <Card.Actions style={styles.actions}>
          <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.button}>
            Go Back
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  cardTitle: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  bookDescription: {
    marginVertical: 8,
    lineHeight: 22,
  },
  divider: {
    marginVertical: 16,
    height: 1,
    backgroundColor: '#ddd',
  },
  bookInfo: {
    marginBottom: 4,
    fontStyle: 'italic',
  },
  actions: {
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: 16,
  },
});

export default DetailScreen;
