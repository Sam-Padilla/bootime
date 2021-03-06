import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet, 
  View,
  TouchableOpacity
} from 'react-native';

import HeadersText from '../molecules/HeadersText';
export default class HeaderMain extends Component {


  render() { 
  
    return ( 
      <View style={styles.container}>
        <HeadersText textPrimary={this.props.textPrimary} textSecondary={this.props.textSecondary} />
        <TouchableOpacity style={styles.touchable} onPress={() => Actions.UserInfo({user: this.props.user})}>
          <Icon style={styles.card} size={30} name='id-card'/>
        </TouchableOpacity>
      </View>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable:{
    position: 'absolute',
    top: 84, right: 50, 
  },
  card: {
    color: 'white',
    fontWeight: 'normal',
  },

});