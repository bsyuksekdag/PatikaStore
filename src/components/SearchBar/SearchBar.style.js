import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eceff1',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
