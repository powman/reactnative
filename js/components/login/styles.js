
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

module.exports = StyleSheet.create({
  background: { 
    position:"absolute"
  },
  container: { 
    backgroundColor: '#670d38',
    flex:1,
    justifyContent: 'center'
  },
  meio: {
    height:deviceHeight,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width:280,
    resizeMode:'contain',
    height:100,
    marginBottom:20
  },
  input: {
    marginBottom: 20,
    backgroundColor:"#fff",
    borderRadius: 5,
    borderWidth: 1,
    height:45,
    fontSize:13,
    color:'#857777',
    borderColor: '#0f0f0f',
    borderWidth:0,
    paddingLeft:4,
    width:280,
  },
  linearGradient: {
    height:45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    flex:1,
    
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  TouchableOpacity:{
    height:45,
    width:280,
    marginBottom:15
  },
  TextosRodape:{
    flexDirection:'row', 
    flexWrap:'wrap',
    alignSelf:'auto'
  },
  TextoRodape1:{
    color:"#fff",
    backgroundColor:'transparent',
    marginRight:82
  },
  TextoRodape2:{
    color:"#fff",
    backgroundColor:'transparent'
  },
});
