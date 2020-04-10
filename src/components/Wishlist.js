import React, {Fragment, Component} from 'react';
import ImagePicker from 'react-native-image-picker';
// import CheckBox from '@react-native-community/checkbox';
//import { CheckBox } from 'react-native-elements'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

var radio_props = [
  {label: 'Male       ', value: 0},
  {label: 'Female', value: 1},
];

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      pass: true,
      value: 0,

      JoinPass: true,
      toggleScreen1: true,
      toggleScreen2: false,
      username: '',
      passWord: '',
      authenticatedUser: false,
      loggedOut: false,
      isLoading: false,
    };
  }
  componentDidMount() {}
  onPressSubmitButton() {
    this.onFetchLoginRecords();
  }

  OnpressSignIn() {
    this.onFetchLoginRecords();
    this.setState({isLoading: true});
  }

  async onFetchLoginRecords() {
    var data = {
      username: this.state.username,
      password: this.state.passWord,
    };
    console.log(data);
    try {
      let response = await fetch(
        'https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
        {
          method: 'POST',

          body: JSON.stringify(data),
        },
      );

      if (response.status >= 200 && response.status < 300) {
        this.setState({authenticatedUser: true});
        console.log('isLoading');
        this.setState({isLoading: false});
        console.log('authenticated');
        console.log('authentication in Fetch' + this.state.authenticatedUser);
        alert('authenticated Successfully');
      } else {
        alert('Invalid Credentials');
        this.setState({isLoading: false});
      }
    } catch (errors) {
      alert(errors);
    }
  }
  render() {
    const {
      toggle,
      pass,
      JoinPass,
      toggleScreen1,
      toggleScreen2,
      isLoading,
      authenticatedUser,
    } = this.state;
    console.log('loadingInRender');
    console.log(isLoading);
    console.log('Is authenticated?' + authenticatedUser);

    return (
      <SafeAreaView style={style.safeAreaStyle}>
        <View style={{flex: 0.13}}>
          <View style={{flex: 1}}>
            <View style={{height: 40}}></View>
            <View style={{alignItems: 'flex-end'}}>
              <Image
                source={require('../assets/cross.png')}
                style={style.crossImage}
              />
            </View>

            <View style={style.upperTabViewStyling}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {/* <View style={{borderWidth:1,flexDirection:"row"}}> */}
                <View style={{flex: 1.5}}></View>
                <View style={toggleScreen1 ? style.bottomBorder : null}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({toggle: true});
                      this.setState({toggleScreen1: toggleScreen1});
                      // this.setState({})
                    }}>
                    <Text style={style.upperTabSignInStyling}>Sign In</Text>
                  </TouchableOpacity>
                  {/* </View> */}
                </View>
                <View style={{flex: 1.5}}></View>
              </View>

              <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flex: 1.5}}></View>
                <View style={toggleScreen2 ? style.bottomBorder : null}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({toggle: false});
                      this.setState({toggleScreen1: !toggleScreen1});
                      this.setState({toggleScreen2: toggleScreen2});
                    }}>
                    {console.log(toggle)}

                    <Text style={style.upperTabJoinStyling}>
                      Join
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1.5}}></View>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 0.87}}>
          {toggle ? (
            isLoading ? (
              <View style={style.indicatorstyling}>
                <ActivityIndicator />
              </View>
            ) : authenticatedUser ? (
              <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={style.authenticatedUserView}>
                  <Text style={{fontSize: 20}}>Hello User</Text>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({authenticatedUser: false});
                    }}>
                    <Text
                      style={style.logoutButton}>
                      Log Out
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={{flex: 1}}>
                <View style={{height: 30}}></View>
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'Your Email Address'}
                  keyboardType={'email-address'}
                  onChangeText={(text) =>
                    this.setState({username: text})
                  }></TextInput>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={{
                      ...style.textInputFields,
                      flex: 0.8,
                      borderRightWidth: 0,
                    }}
                    placeholder={'password'}
                    secureTextEntry={pass}
                    onChangeText={(text) => this.setState({passWord: text})}
                  />
                  <View style={style.showHidePassword}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({pass: !pass});
                      }}>
                      <Text style={{fontSize: 16}}>
                        {pass ? 'Show' : 'Hide'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity>
                  <Text style={style.forPass}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>{
                    // this.OnpressSignIn();
                    //this.onFetchLoginRecords.bind(this)
                    this.onFetchLoginRecords(),
                     this.setState({isLoading:true})
                  }}>
                  <View style={{height: 20}}></View>
                  <View
                    style={{
                      ...style.textInputFields,
                      ...style.SignInView,
                    }}>
                    <Text style={style.signInTextStyling}>Sign In</Text>
                  </View>
                </TouchableOpacity>

                <View style={{height: 50}}></View>

                <Text
                  style={{alignSelf: 'center', fontSize: 13, color: '#484d4c'}}>
                  or Sign In via
                </Text>

                {/* FB GOOGLE LOGIN VIEW    */}

                <View style={{flex: 1}}>
                  <View style={{...style.fbGoogleView, flex: 0.8}}>
                    <TouchableOpacity style={{flex: 1}}>
                      <View style={{...style.fbView, marginRight: 8}}>
                        <View style={{flex: 4}}>
                          <Image
                            source={require('../assets/facebook.png')}
                            style={style.fbImage}
                          />
                        </View>
                        <Text style={style.textFB}> Facebook</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex: 1}}>
                      <View
                        style={{
                          ...style.fbView,

                          marginLeft: 8,
                        }}>
                        <Image
                          source={require('../assets/google.png')}
                          style={style.googleImage}
                        />
                        <Text style={style.textFB}> Google</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={style.lowerPanel}>
                    <TextInput style={style.horizontalRule}></TextInput>
                    <View style={style.lowerPanelView}>
                      <Text style={style.lowerPanelTextStyling}>
                        Don't have an account?
                      </Text>
                      <Text style={{fontSize: 15, marginHorizontal: 10}}>
                        {' '}
                        Join
                      </Text>
                    </View>

                    <TextInput style={style.horizontalRule}></TextInput>
                  </View>
                </View>
              </View>
            )
          ) : (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
              <View>
                <View style={{height: 30}}></View>
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'First Name'}
                  keyboardType={'email-address'}></TextInput>
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'Last Name'}></TextInput>
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'Your Email '}
                  keyboardType={'email-address'}></TextInput>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={{
                      ...style.textInputFields,
                      flex: 0.8,
                      borderRightWidth: 0,
                    }}
                    placeholder={'password'}
                    secureTextEntry={JoinPass}
                  />
                  <View style={style.showHidePassword}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({JoinPass: !JoinPass});
                      }}>
                      <Text style={{fontSize: 16}}>
                        {JoinPass ? 'Show' : 'Hide'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{marginLeft: 15}}>
                  <RadioForm
                    radio_props={radio_props}
                    onPress={(value) => {
                      this.setState({value: value});
                    }}
                    formHorizontal={true}
                    buttonColor={'#f2a668'}
                    borderWidth={0}
                    buttonSize={15}
                  />
                </View>
                <View style={{margin: 15}}>
                  <Text style={style.infoText}>
                    Be the first to know about new arrivals, sales & promos by{' '}
                  </Text>
                  <Text style={style.infoText}>
                    submitting your email. You can opt out at any time. Privacy
                  </Text>
                  <Text style={style.infoText}>Policy</Text>
                </View>

                <TouchableOpacity>
                  <View style={{height: 20}}></View>
                  <View
                    style={{
                      ...style.textInputFields,
                      ...style.SignInView,
                      marginVertical: 20,
                    }}>
                    <Text style={style.signInTextStyling}>Join Now</Text>
                  </View>
                </TouchableOpacity>

                <View style={{marginVertical: 20}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 13,
                      color: '#484d4c',
                    }}>
                    or Join via
                  </Text>
                </View>

                <View style={style.fbGoogleView}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{...style.fbView, marginRight: 8}}>
                      <View style={{flex: 4}}>
                        <Image
                          source={require('../assets/facebook.png')}
                          style={style.fbImage}
                        />
                      </View>
                      <Text style={style.textFB}> Facebook</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{...style.fbView, marginLeft: 8}}>
                      <Image
                        source={require('../assets/google.png')}
                        style={style.googleImage}
                      />
                      <Text style={style.textFB}> Google</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          )}
        </View>
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
  upperTabViewStyling: {flexDirection: 'row', marginBottom: 10},

  forPass: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 14,
  },
  upperTabSignInStyling: {
    alignSelf: 'center',
    fontSize: 24,
    paddingBottom: 20,
  },
  authenticatedUserView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 7,
  },
  upperTabJoinStyling:{fontSize: 24, alignSelf: 'center'},
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
  crossImage: {
    marginRight: 20,
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  signInTextStyling: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  logoutButton:{
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
