import React from 'react'
import { StyleSheet } from 'react-native'
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
  } from 'react-native-simple-radio-button';
var radio_props = [
    {label: 'Male       ', value: 0},
    {label: 'Female', value: 1},
  ];

class Join extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={
            JoinPass: true,
            value: 0,
        }

    }
    
    render()
    {
        return( <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
      </SafeAreaView>)

    }
}
const style= StyleSheet.create({
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

})
export default Join