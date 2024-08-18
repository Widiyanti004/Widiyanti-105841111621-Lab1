import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView, Modal, Animated } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const SortBy = () => {
  const categories = ['Scarve', 'Blouses', 'Dress', 'OuterWear']
  const [products, setProducts] = useState([
    {
      name: 'Scarve Black',
      image: require('./assets/image15.webp'),
      color: 'Brown',
      size: 'M',
      price: 50000,
      rating: 4,
      ratingCount: 12,
      isFavorited: false,
    },
    {
      name: 'Blouse',
      image: require('./assets/abiel-Blouse.webp'),
      color: 'Pink',
      size: 'L',
      price: 250000,
      rating: 5,
      ratingCount: 18,
      isFavorited: false,
    },
    {
      name: 'Ginny-Dress',
      image: require('./assets/image8.webp'),
      color: 'Black',
      size: 'L',
      price: 450000,
      rating: 5,
      ratingCount: 42,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: false,
    },
    {
      name: 'Outerwear',
      image: require('./assets/image16.webp'),
      color: 'Green',
      size: 'L',
      price: 650000,
      rating: 3,
      ratingCount: 28,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Price: lowest to high');

  // Animation setup
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animValue]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? 'star' : 'star-border'}
          size={20}
          color={i <= rating ? '#FFD700' : '#B0B0B0'}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={styles.ratingText}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].isFavorited = !newProducts[index].isFavorited;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const sortProductsByOption = (option) => {
    switch (option) {
      case 'Popular':
        break;
      case 'Newest':
        break;
      case 'Customer Review':
        break;
      case 'Price: lowest to high':
        sortProductsByPrice(true);
        break;
      case 'Price: highest to low':
        sortProductsByPrice(false);
        break;
      default:
        break;
    }
    setSelectedSortOption(option);
    setModalVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.sale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.sale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>Rp {item.originalPrice.toLocaleString('id-ID')}</Text>
            <Text style={styles.salePrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <FontAwesome
          name={item.isFavorited ? 'heart' : 'heart-o'}
          size={28}
          color={item.isFavorited ? 'red' : '#B0B0B0'}
        />
      </TouchableOpacity>
    </View>
  );

  // Animation style
  const animatedTextStyle = {
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10], 
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Animated.Text style={[styles.headerTitle, animatedTextStyle]}>Women's tops</Animated.Text>
        <MaterialIcons name="search" size={24} color="black" />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
     <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>{selectedSortOption}</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </TouchableOpacity>
      </View> 
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />

      {/* Modal for Sort By */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <TouchableOpacity onPress={() => sortProductsByOption('Popular')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Popular' && styles.selectedOption]}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Newest')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Newest' && styles.selectedOption]}>
                Newest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Customer Review')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Customer Review' && styles.selectedOption]}>
                Customer Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Price: lowest to high')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Price: lowest to high' && styles.selectedOption]}>
                Price: lowest to high
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortProductsByOption('Price: highest to low')}>
              <Text style={[styles.modalOption, selectedSortOption === 'Price: highest to low' && styles.selectedOption]}>
                Price: highest to low
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  categoryContainer: {
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: 'black',
    marginHorizontal: 15,
    borderRadius: 18,
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  filterText: {
    fontSize: 14,
    marginRight: 8,
  },
  productList: {
    marginTop: 16, 
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    paddingVertical: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  salePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loveButton: {
    position: 'absolute',
    top: 165,
    right: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 8,
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default SortBy;