
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
  bloco: {
    width:300,
    height:260,
    backgroundColor:"rgba(255,255,255,0.2)",
    borderRadius: 10,
  },
  logo: {
    width:280,
    resizeMode:'contain',
    height:100,
    marginBottom:20
  },
  texth1: {
    color:"#ffffff",
    fontSize:20,
    textAlign: 'center',
    paddingTop:20
  },
  texth2: {
    color:"#ffffff",
    fontSize:14,
    textAlign: 'center',
    paddingTop:10,
    paddingLeft:5,
    paddingRight:5
  },
  texth3: {
    color:"#ffffff",
    fontSize:14,
    textAlign: 'center'
  },
  linearGradient: {
    height:45,
    borderRadius: 5,
    marginLeft:10,
    marginRight:10
    
  },
  TouchableOpacity:{
    height:45,
    marginBottom:15,
    marginTop:10
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  TextosRodape:{
    flexDirection:'row', 
    flexWrap:'wrap',
    alignSelf:'auto',
    marginTop:20
  },
  TextoRodape1:{
    color:"#fff",
    backgroundColor:'transparent',
    marginRight:140,
    fontFamily: 'Gill Sans',
    fontSize: 18,
  },
  TextoRodape2:{
    color:"#fff",
    backgroundColor:'transparent',
    fontFamily: 'Gill Sans',
    fontSize: 18,
  },
});
