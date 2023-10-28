import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flex: 1,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  stock: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
});
