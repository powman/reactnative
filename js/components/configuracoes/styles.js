
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

module.exports = StyleSheet.create({
  container: { 
    backgroundColor: '#670d38',
  },
  meio: {
    height:deviceHeight,
  },
});
