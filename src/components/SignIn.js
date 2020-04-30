import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import 'react-native-gesture-handler';
import * as RootNavigation from '../components/RootNavigation'


import UpperTabSignJoin from '../components/UpperTabSignJoin';
import Profile from '../components/Profile'


class SignIn extends React.Component {
  constructor(props) {
      
    super(props);
    this.state = {
      pass: true,
      username: 'axfood',
      passWord: 'axfood@123',
      authenticatedUser: false,
      isLoading: false,
      authorizationToken: ''
    };
  }
  profileScreen=()=>
  {   const {navigation}= this.props
    navigation.navigate('Profile', {authentication: authenticatedUser})
  }
  getToken=(authorizationKey)=>{
      let key=  authorizationKey.split(' ')
        this.setState({authorizationToken: key[1]})
        console.log("authKey: "+ this.state.authorizationToken)
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
        console.log('authentication in Fetch(): ' + this.state.authenticatedUser);
        alert('authenticated Successfully');
        this.getToken(response.headers.map.authorization)
      } else {
        alert('Invalid Credentials');
        this.setState({isLoading: false});
      }
    } catch (errors) {
      alert(errors);
      this.setState({isLoading: false})
    }
  }
  

  render() {
    const {pass,isLoading,authenticatedUser} = this.state
    const {navigation}= this.props;
    console.log("navigation: "+navigation)
   
    console.log("token"+this.state.authorizationToken)

    return (
       
      <SafeAreaView style={{flex: 1}}>
          <View>{console.log("user token:"+ this.state.authorizationToken)}</View>
       
        {
        isLoading ? (
          <View style={style.indicatorstyling}>
            <ActivityIndicator />
          </View>
        ) : authenticatedUser ? (   
       
        RootNavigation.navigate("Profile", {token: this.state.authorizationToken,authenticatedUser: authenticatedUser})
            
         
        )
         :
        <View style={{flex:1}}>
             <View style={{flex: 0.13}}>
          <UpperTabSignJoin />
        </View>
        <View style={{flex: 0.87}}>
          <View style={{height: 30 }}></View>
          <TextInput
            style={{...style.textInputFields, marginRight: 15}}
            placeholder={'Your Email Address'}
            keyboardType={'email-address'}
            defaultValue={'axfood'}
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
              defaultValue={'axfood@123'}
              onChangeText={(text) => this.setState({passWord: text})}
            />
            <View style={style.showHidePassword}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({pass: !pass});
                }}>
                <Text style={{fontSize: 16}}>{pass ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={style.forPass}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={{height: 20}}></View>
          <TouchableOpacity
            onPress={() => {
              // this.OnpressSignIn();
              //this.onFetchLoginRecords.bind(this)
              this.onFetchLoginRecords(), this.setState({isLoading: true});
            }}>
            <View
              style={{
                ...style.textInputFields,
                ...style.SignInView,
              }}>
              <Text style={style.signInTextStyling}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <View style={{height: 50,}}></View>

          <Text style={{alignSelf: 'center', fontSize: 13, color: '#484d4c'}}>
            or Sign In via
          </Text>

          {/* FB GOOGLE LOGIN VIEW    */}

          <View style={{flex: 0.8}}>
            <View
              style={{
                ...style.fbGoogleView,
                backgroundColor: 'white',
                
              }}>
                  <View style={{flex:1}}>
                   <TouchableOpacity >
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
              </View>


              
              <View style={{flex:1}}>
              <TouchableOpacity >
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
                     </View>
          </View>



            
               
            <View style={style.lowerPanel}>
              <TextInput style={style.horizontalRule}></TextInput>
              <View style={style.lowerPanelView}>
                <Text style={style.lowerPanelTextStyling}>
                  Don't have an account?
                </Text>
                <Text style={{fontSize: 15, marginHorizontal: 10}}> Join</Text>
              </View>

              <TextInput style={style.horizontalRule}></TextInput>
            </View>
          </View>
          </View>}
          
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

  fbGoogleView: {flexDirection: 'row', marginHorizontal: 15, marginVertical: 5},
  lowerPanel: {backgroundColor: '#f2ede9', flex: 0.23},
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
export default SignIn


