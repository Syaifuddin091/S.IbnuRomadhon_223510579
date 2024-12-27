import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  // Data untuk card
  const books = [
    {
      id: '1',
      title: 'React Native Book',
      subtitle: 'Learn React Native Easily',
      description: 'Discover the amazing world of React Native development.',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      id: '2',
      title: 'JavaScript Mastery',
      subtitle: 'Master JavaScript in no time',
      description: 'Become a pro at JavaScript with this comprehensive guide.',
      image: 'https://via.placeholder.com/300x150?text=JavaScript',
    },
    {
      id: '3',
      title: 'Mobile UI/UX Design',
      subtitle: 'Create Stunning Mobile Designs',
      description: 'Learn the art of creating visually stunning mobile designs.',
      image: 'https://via.placeholder.com/300x150?text=Mobile+Design',
    },
    {
      id: '4',
      title: 'Python Programming',
      subtitle: 'Start coding with Python',
      description: 'Dive into Python programming and build amazing projects.',
      image: 'https://via.placeholder.com/300x150?text=Python+Programming',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Title title={item.title} subtitle={item.subtitle} />
              <Card.Content>
                <Text variant="bodyMedium">{item.description}</Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => navigation.navigate('Detail', { bookTitle: item.title })}>
                  View Details
                </Button>
              </Card.Actions>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    overflow: 'hidden',
  },
});

export default HomeScreen;
