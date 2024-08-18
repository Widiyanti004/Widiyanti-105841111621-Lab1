import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VisualCrop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crop the item</Text>
      </View>
      <ImageBackground
        source={require('./assets/image2.webp')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.cropArea}>
            <View style={[styles.corner, styles.cornerTopLeft]} />
            <View style={[styles.corner, styles.cornerTopRight]} />
            <View style={[styles.corner, styles.cornerBottomLeft]} />
            <View style={[styles.corner, styles.cornerBottomRight]} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={36}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: 630, 
    height: 630, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropArea: {
    position: 'relative',
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
  },
  corner: {
    width: 20,
    height: 20,
    borderColor: 'white',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: -10,
    left: -10,
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  cornerTopRight: {
    position: 'absolute',
    top: -10,
    right: -10,
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: -10,
    left: -10,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  searchButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VisualCrop;