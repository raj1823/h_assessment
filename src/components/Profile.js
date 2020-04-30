import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Data from '../components/Data';
import {withNavigation} from 'react-navigation';
import * as RootNavigation from '../components/RootNavigation';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      storeData: [],
      isLoading: false,
      authenticatedUser:this.props.route.params.authenticatedUser
    };
  }
  apiFetchData() {
    // console.log('apiFetchData() called'+this.state.token);

    return fetch(
      'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
      {
        method: 'GET',
        headers: {
          authorization: this.props.route.params.token,
        },
      },
    )
      .then((responsejson) => {
        if (responsejson.status >= 200 && responsejson.status < 300) {
          alert('User Authenticated');
          this.setState({isLoading:false})
          return responsejson.json();
        } else {
          alert('Response Error');
        }
      })
      .then((data) => {
        this.setState({storeData: data});
        console.log('StoreData after resolving: ', this.state.storeData);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.setState({storeData: storeInfo});
  }

  render() {
    const { token} = this.props.route.params.token
    console.log('TOKEN:' + token);
    const {isLoading} = this.state;

    const {toggle} = this.state;

    //console.log("Token in Profile:"+this.props.token)
    //console.log("Auth Key in Profile: "+authKey)
    return (
      <View style={{flex: 1}}>
        {toggle ? (
          <View style={{flex: 1, backgroundColor:"#fff"}}>
            <View style={[style.authenticatedUserView,{flex:2}]}>
              <Text style={{fontSize: 25,}}>Hello User</Text>
              
              <TouchableOpacity
                onPress={() => {
                  this.setState({authenticatedUser: false});
                  RootNavigation.navigate("wishlist")
                }}>
                <Text style={style.logoutButton}>Log Out</Text>
              </TouchableOpacity>
            
            </View>
            <View style={{justifyContent:"center",flex:10}}>
            <TouchableOpacity
              onPress={() => {
                //this.props.navigation.navigate("data")
                this.apiFetchData();
                this.setState({toggle: false});
                this.setState({isLoading:true})
              }}>
              
                <Text style={{padding:10,alignSelf:"center",...style.logoutButton}}> Display Data</Text>
                  </TouchableOpacity>
              </View>
          
           
          </View>
        ) : 
        
        
        //   <Data tokenid={token}
        //         storeCityData={this.state.storeData} />

        isLoading ? (
          <View style={style.indicatorstyling}>
            <ActivityIndicator />
          </View>
        ) : (
          RootNavigation.navigate('data', {
            storeCityData: this.state.storeData,
            tokenid: token,
          })
        )}
      </View>
    );
  }
}

const style = StyleSheet.create({
  authenticatedUserView: {
    justifyContent:"space-between",
  
    flexDirection:"row"
  },

  logoutButton: {
    fontSize: 25,
    
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
   
  },
  indicatorstyling: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
export default Profile;
