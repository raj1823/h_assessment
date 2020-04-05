import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
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
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Wishlist extends React.Component
{
  render()
  {
    return(
      <View><SafeAreaView style={{backgroundColor:"#fff"}}>
        <View style={{height:150}}> 

        </View>
        <TextInput style={style.textInputFields}
                    defaultValue={"Your Email Address"}
                    keyboardType={"email-address"}></TextInput>
        <TextInput style={style.textInputFields}
                    defaultValue={"Password"}
                    
                    secureTextEntry={true}></TextInput>


                    <TouchableOpacity>
                      <Text style={style.forPass}>Forgot Password?</Text>
                    </TouchableOpacity>
          
        <TouchableOpacity>
          <View style={{height:20}}></View>
          <View style={{...style.textInputFields,backgroundColor:"#000",justifyContent:"center"}}>
            <Text style={{fontSize:20,color:"#fff",alignSelf:"center"}}>
              Sign In
            </Text >

          </View>
        </TouchableOpacity>


        <View style={{height:50}}></View>

        <Text style={{alignSelf:"center",fontSize:13,color:"#484d4c"}}>or Sign In via</Text>

        <View style={{flexDirection:"row",marginVertical:3}}>
        <TouchableOpacity style={{flex:1}}>
          <View style={{height:50,margin:10,flexDirection:"row",alignItems:"center",borderWidth:1,borderColor:"2f3030"}}>
            <View style={{flex:4}}>
               <Image source={require('../assets/facebook.png')}
                    style={{height:50,resizeMode:"contain",alignSelf:"center"}}/>
                    </View>
             <Text style={{flex:7,fontSize:20}}> Facebook</Text>       

          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1}}>
          <View style={{height:50,margin:10,flexDirection:"row",alignItems:"center",borderWidth:1,borderColor:"2f3030"}}>
            <Image source={require('../assets/google.png')}
                    style={{flex:6,alignSelf:"center",resizeMode:"contain",height:25}}/>
             <Text style={{flex:7,fontSize:20}}> Google</Text>       

          </View>
        </TouchableOpacity>
       
        </View>
        <View style={{height:150}}></View>

          


       

        
      </SafeAreaView>
       <View style={{justifyContent:"flex-end",backgroundColor:"#f2ede9"}}>
       <TextInput style={{borderColor:"#cfccc8",borderWidth:0.7,height:1}}></TextInput>
       <View style={{flexDirection:"row",alignSelf:"center",marginVertical:22}}>
        

       <Text style={{fontSize:15,color:"#6b6967",marginHorizontal:10}}> Don't have an account?</Text>
       <Text style={{fontSize:15,marginHorizontal:10}}> Join</Text>
       
       </View>

       <TextInput style={{borderColor:"#cfccc8",borderWidth:1,height:1}}></TextInput>
     </View>
     </View>
    )
  }
}
const style= StyleSheet.create({
    textInputFields:{
      height:50,
      marginHorizontal:15,
      borderColor:"#e3dddc",
      borderWidth:1,
      paddingLeft:10,
      marginVertical:8
    },


    forPass:{fontSize:13,
              fontWeight:'400',
              alignSelf:"center",
              marginVertical:14
            },
            

})
export default Wishlist;