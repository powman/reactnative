const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  loadingBG: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#000000',
    position:'absolute',
    zIndex:2,
    opacity:0.7
  },
  loadingText: {
    color:"#ffffff"
  },
});
