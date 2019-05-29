import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  ImageBackground,
  BackHandler,
  ToastAndroid,
  View
} from 'react-native';

import HeaderMain from '../organism/HeaderMain';

export default class ConfigurationCarnet extends Component {


  constructor(props){
    super(props);

    this.getUserData(props.carnet);
  }

  getUserData(carnet){
    //acUserData(carnet);
    this.state={
      name: 'negro',
    }
  }
  
  //block the return key
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      ToastAndroid.show('Cierra Cesión para regresar', ToastAndroid.CENTER);
      return true;
  }

  render() { 
    return ( 
      <ImageBackground 
      source={require('../img/background.jpg')} style={{ flex: 1 }}>
        <View style={styles.page}>
          <HeaderMain textPrimary="Libros" textSecondary={"de: " + this.state.name} />
        </View>
      </ImageBackground>
     );
  }
}
 
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});