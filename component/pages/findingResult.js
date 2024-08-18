import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FindingResults = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={70} color="#FF0000" style={styles.searchIcon} />
      <Text style={styles.text}>Finding similar results...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  searchIcon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default FindingResults;
