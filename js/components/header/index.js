import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Icon, Button, Title } from 'native-base';
import styles from './styles';

const {
  popRoute,
} = actions;

class Header extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <View style={styles.body}> 
          <View style={styles.TextosHeader}>
            <Button style={styles.btnLeftRight} transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>

            <Title style={styles.btnMeio}>{'Blank Page'}</Title>

            <Button style={styles.btnLeftRight} transparent onPress={this.props.openDrawer}>
              <Icon style={styles.opacidade} name="ios-menu" />
            </Button>
          </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, bindAction)(Header);