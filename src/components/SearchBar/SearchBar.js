import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ara..."></TextInput>
    </View>
  );
};

export default SearchBar;
