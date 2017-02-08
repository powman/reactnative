
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Title, Icon, Button} from 'native-base';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
//import { Grid, Row } from 'react-native-easy-grid';

//import * as Animatable from 'react-native-animatable';
//import myTheme from '../../themes/base-theme';
import styles from './styles';
//import Header from '../header';


const {
  pushRoute,
} = actions;

class Cadastro extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
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

function bindAction(dispatch) {
  return {
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Cadastro);
