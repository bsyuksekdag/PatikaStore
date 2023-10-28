import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import products_data from './products_data.json';
const App = () => {
  const renderProduct = ({item}) => <ProductCard products={item} />;
  const renderKey = item => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        keyExtractor={renderKey}
        data={products_data}
        renderItem={renderProduct}
        numColumns={2}></FlatList>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#800080',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
