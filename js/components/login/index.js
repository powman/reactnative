
import React, { Component } from 'react';
import { Image, TouchableOpacity, ActivityIndicator, View, Text, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import Loading from '../loading'; 
import AuthService from '../../api/AuthService'; 
import StatusBarAlert from '../alert/MessageBar'; 
//import {LoginManager} from 'react-native-fbsdk'; 
import * as Animatable from 'react-native-animatable';

const { replaceAt, pushRoute,} = actions;

class Login extends Component {

  static propTypes = { 
    setUser: React.PropTypes.func,
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

  logarComFacebook() {
    /*LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );*/
  }

  render() { 
      return (
        <View style={styles.container}> 
          <Loading visible={this.state.isLoading} loadingText="Carregando..." />
          <StatusBarAlert visible={this.state.status_visible} message={this.state.status_mensagem} backgroundColor={this.state.status_background} color="white"/>
          <ScrollView
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}>
            <View style={styles.meio}>
              <Animatable.Image animation="bounceInDown" source={require('../../../images/logo_branca.png')} style={styles.logo}></Animatable.Image>
              <Animatable.View animation="fadeInDown">
                <TextInput autoCapitalize={'none'} style={styles.input} placeholder="Usuário" onChangeText={usuario => this.setState({ usuario })} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" onChangeText={senha => this.setState({ senha })} />
              </Animatable.View>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={() => this.logar()}>
                <LinearGradient colors={['#ffffff','#ffffff']} style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    Entrar
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              {/*<TouchableOpacity style={styles.TouchableOpacity} onPress={() => this.logarComFacebook()}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    Entrar com Facebook
                  </Text>
                </LinearGradient>
              </TouchableOpacity>*/ }
              <View style={styles.TextosRodape}>
                <TouchableOpacity onPress={() => this.pushRoute('cadastro',1)}>
                  <Animatable.Text animation="flipInX" style={styles.TextoRodape1}>Cadastre-se</Animatable.Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.replaceRoute('recuperarSenha')}>
                  <Animatable.Text animation="flipInX" style={styles.TextoRodape2}>Recuperar Senha</Animatable.Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>       
      );
   }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setUser: name => dispatch(setUser(name)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
