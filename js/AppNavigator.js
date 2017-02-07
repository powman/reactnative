
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

import Login from './components/login/';
import Home from './components/home/';
import Cadastro from './components/cadastro/';
import Configuracoes from './components/configuracoes/';
import SideBar from './components/sideBar';
import { statusBarColor } from './themes/base-theme';

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  constructor(props){

    super(props);
    this.state = {
      logado: false,
    }

  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
    // verifica se tem sessao
    AsyncStorage.getItem('DataPerfil').then((val) => {
      if (val) {
        this.setState({logado:true});
      }

    }).done();
  }

  componentDidUpdate() {
    
  }

  popRoute() {
    this.props.popRoute();
  }

 _renderScene(props,logado) { // eslint-disable-line class-methods-use-this
   tipo = logado == true && props.scene.route.key == "login" ? 'home' : props.scene.route.key;
   switch (tipo) {
      case 'login':
        return <Login />;
      case 'home':
        return <Home />;
      case 'cadastro':
        return <Cadastro />;
      case 'configuracoes':
        return <Configuracoes />;
      default :
        return <Home />;
    }
  }

  render() {
    return (
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="default"
        />
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={(transitionProps,logado) => this._renderScene(transitionProps,this.state.logado)}
          direction={ 'horizontal' }
          configureScene={() => { return Navigator.SceneConfigs.VerticalUpSwipeJump; }}
        />
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
