
import React, { Component } from 'react';
import { TouchableOpacity,View, Text, AsyncStorage, ScrollView, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Grid, Row } from 'react-native-easy-grid';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';


const {
  reset,
  pushRoute,
} = actions;

class Home extends Component {

  pushRoute(route, index) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  replaceRouteLogout(route){
    AsyncStorage.setItem("DataPerfil", "");
    this.props.reset(this.props.navigation.key);
  }

  sair() {
    Alert.alert(
      'Alerta de confirmação',
      'Deseja realmente sair da sua conta?',
      [
        {text: 'Sim', onPress: () => 
        this.replaceRouteLogout('login')
      },
        {text: 'Cancelar', onPress: () => console.log('Cancelado'), style: 'cancel'}
      ]
    )
  }

  render() {
    return (
      <View style={styles.container}> 
        <ScrollView
        automaticallyAdjustContentInsets={false}
        style={styles.scrollView}>
          <View style={styles.meio}>
            <Animatable.Image animation="bounceInDown" source={require('../../../images/logo_branca.png')} style={styles.logo}></Animatable.Image>
            <View style={styles.bloco}>
              <Text style={styles.texth1}>
                Qual o seu tipo de acesso?
              </Text>
              <Text style={styles.texth2}>
                Selecione se você irá emitir a sua localização ou se irá visualizar algum viajante.
              </Text>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={() => this.logar()}>
                <LinearGradient colors={['#ffffff','#ffffff']} style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    Viajante
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.texth3}>
                Ou
              </Text>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={() => this.logar()}>
                <LinearGradient colors={['#ffffff','#ffffff']} style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    Observador
                  </Text>
                </LinearGradient>
              </TouchableOpacity> 
            </View>
            <View style={styles.TextosRodape}>
              <TouchableOpacity onPress={() => this.sair()}>
                <Animatable.Text animation="flipInX" style={styles.TextoRodape1}>Sair</Animatable.Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.pushRoute('configuracoes',1)}>
                <Animatable.Text animation="flipInX" style={styles.TextoRodape2}>Configurações</Animatable.Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View> 
    );
  }
}

function bindAction(dispatch) {
  return {
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
