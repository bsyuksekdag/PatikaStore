import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imageUrl}}></Image>
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>${products.price}</Text>
      {products.inStock === false && (
        <Text style={styles.stock}>STOKTA YOK</Text>
      )}
    </View>
  );
};

export default ProductCard;
