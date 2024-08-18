import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Kategori1 = () => {
  const data = [
    {
      label: 'New',
      image: require('./assets/abiel-Blouse.webp'),
    },
    {
      label: 'Dress',
      image: require('./assets/diva-Dress.webp'),
    },
    {
      label: 'ActiveWear',
      image: require('./assets/outerwear.webp'),
    },
    {
      label: 'Accessories',
      image: require('./assets/gold.webp'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section with Back Arrow and Categories */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Back Arrow */}
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categories</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="#888888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>

        {/* Category Tabs */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Women</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summer Sales Section */}
      <View style={styles.salesContainer}>
        <Text style={styles.salesText}>SUMMER SALES</Text>
        <Text style={styles.salesSubText}>Up to 50% off</Text>
      </View>

      {/* Other categories */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItemList}>
            <View style={styles.categoryLabelContainer}>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
            <Image source={item.image} style={styles.categoryImage} />
          </TouchableOpacity>
        )}
        style={styles.categoryList}
      />
    </View>
  );
};

// Styles for the Categories screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 50, 
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  salesContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  salesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoryList: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  categoryItemList: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginRight: 8,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default Kategori1;