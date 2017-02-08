
import React, { Component } from 'react';
import { View, AsyncStorage, Alert } from 'react-native';
import { Container, Header, Content, Title, Icon, Button} from 'native-base';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
//import { Grid, Row } from 'react-native-easy-grid';

//import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
//import myTheme from '../../themes/base-theme';
import styles from './styles';
const {reset,pushRoute} = actions;

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
      <Container>
        <Content>
          <View style={{flex: 1, height: screenHeight, justifyContent: 'center'}}>
            <Button block> Login </Button>
          </View>
        </Content>
      </Container>  
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
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
