import React from 'react'
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



class UpperTabSignJoin extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            toggleScreen1: true,
      toggleScreen2: false,
      toggle:true
        }
    }

    render()
    {           const {toggleScreen1,toggleScreen2,toggle}=this.state;
        return(
            <View style={{flex: 1}}>
            <View style={{height: 20}}></View>
            <View style={{alignItems: 'flex-end'}}>
              <Image
                source={require('../assets/cross.png')}
                style={style.crossImage}
              />
            </View>

            <View style={{...style.upperTabViewStyling}}>
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
        )
    }
}

const style=StyleSheet.create({

    upperTabViewStyling: {flexDirection: 'row', marginBottom: 10},
    upperTabSignInStyling: {
        alignSelf: 'center',
        fontSize: 24,
        paddingBottom: 20,
      },
      upperTabJoinStyling:{fontSize: 24, alignSelf: 'center'},
      crossImage: {
        marginRight: 20,
        height: 25,
        width: 25,
        resizeMode: 'contain',
      },
})
export default UpperTabSignJoin;