import React, {Fragment, Component} from 'react';
import ImagePicker from 'react-native-image-picker';
// import CheckBox from '@react-native-community/checkbox';
//import { CheckBox } from 'react-native-elements'

import {SafeAreaView, StyleSheet, View} from 'react-native';

import SignIn from '../components/SignIn';
import Join from '../components/Join';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      pass: true,
    };
  }

  render() {
    const {toggle} = this.state;
    console.log('loadingInRender');
    console.log("toggle: "+toggle)

    return (
      <SafeAreaView style={style.safeAreaStyle}>
        <View style={{flex: 1}}>{toggle ? <SignIn  />  : <Join />}</View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  textInputFields: {
    height: 50,
    marginLeft: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
  },
  bottomBorder: {borderBottomWidth: 4, borderColor: '#f7ce6d', flex: 3},
  googleImage: {
    flex: 6,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 25,
  },

  forPass: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 14,
  },

  indicatorstyling: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  fbImage: {
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  safeAreaStyle: {backgroundColor: '#fff', flex: 1},
  showHidePassword: {
    flex: 0.2,
    height: 50,
    borderLeftWidth: 0,
    marginRight: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textFB: {flex: 7, fontSize: 20},

  signInTextStyling: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },

  fbGoogleView: {flexDirection: 'row', marginHorizontal: 15, marginVertical: 3},
  lowerPanel: {backgroundColor: '#f2ede9', flex: 0.19},
  horizontalRule: {
    borderColor: '#cfccc8',
    borderWidth: 0.6,
    height: 1,
  },
  lowerPanelTextStyling: {
    fontSize: 15,
    color: '#6b6967',
    marginHorizontal: 10,
  },

  fbView: {
    height: 50,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  SignInView: {
    backgroundColor: '#000',
    justifyContent: 'center',
    marginRight: 15,
  },
  infoText: {padding: 2},
  lowerPanelView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 22,
  },
});

export default Wishlist;
