import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visivel:false
    }
  }

  render() {
    if (this.props.visible === true) {
      return (
        <View style={styles.loadingBG}> 
          <ActivityIndicator
            animating={true}
            color="white"
            size="large"
            style={{margin: 15}}
            
          />
        </View>
      );
     }else{
      return (<View></View>);
     }
  }
}