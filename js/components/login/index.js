
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Title, Icon, Button} from 'native-base';
//import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
//import Loading from '../loading'; 
import AuthService from '../../api/AuthService'; 
//import StatusBarAlert from '../alert/MessageBar'; 
//import {LoginManager} from 'react-native-fbsdk'; 
//import * as Animatable from 'react-native-animatable';

const { replaceAt, pushRoute,} = actions;

class Login extends Component {

  static propTypes = { 
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = { 
      usuario: '',
      senha: '',
      isLoading: false,
      thought: null,
      status_mensagem: '',
      status_visible: false,
      status_background: '#EE3B3B' 
    };
  } 

  pushRoute(route, index) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  logar() {
    _this = this;
    _this.setState({isLoading:true});
    AuthService.login(_this.state.usuario,_this.state.senha,function(error, data){
      if(data.status == 'erro'){
        _this.setState({isLoading:false});
        _this.setState({status_mensagem:data.mensagem,status_visible:true});
        setTimeout(function(){
          _this.setState({status_mensagem:'',status_visible:false});
        },4000);
      }else{
        AsyncStorage.setItem("DataPerfil", JSON.stringify(data.data));
        _this.setState({isLoading:false});
        _this.setState({status_mensagem:'',status_visible:false});
        _this.props.replaceAt('login', { key: 'home' }, _this.props.navigation.key);

      }
    });
  }

  replaceRoute(route) {
    this.props.replaceAt('login', { key: route}, this.props.navigation.key);
  }

  render() { 
      return (
        <Container>
          <Content>
            <View style={{flex: 1, height: 300, justifyContent: 'center'}}>
              <Button block> Login </Button>
            </View>
          </Content>
        </Container>       
      );
   }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
