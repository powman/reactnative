
import React, { Component } from 'react';
import { TouchableOpacity,View, Text, Navigator, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Grid, Row } from 'react-native-easy-grid';

import * as Animatable from 'react-native-animatable';
import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import Header from '../header';


const {
  reset,
  pushRoute,
} = actions;

class Configuracoes extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <View style={styles.container}> 
        <ScrollView
        automaticallyAdjustContentInsets={false}
        style={styles.scrollView}>
          <View style={styles.meio}>
            <Header></Header>
            <Text>Configuracoes</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)), 
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Configuracoes);
