const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

module.exports = StyleSheet.create({
  body: {
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex:2,
    height:75,
    backgroundColor:"#ffffff"
  },
  btnLeftRight: {
    marginTop:25
  },
  btnMeio: {
    marginTop:10
  },
  TextosHeader:{
  	flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    width:deviceWidth
  },
  opacidade:{
  	opacity:0
  },
});
