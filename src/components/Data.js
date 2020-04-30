import * as React from 'react';
import { SafeAreaView,Text,View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'
import RootNavigation from '../components/RootNavigation'

class Data extends React.Component{

constructor(props)
{
  super(props)
  this.state={
    authtoken: this.props.route.params.tokenid,
    data: this.props.route.params.storeCityData
    
  }
}


render()

{   
  
  console.log("store data in Data: ", this.props.storeCityData)
  
   //const {StoreCityData}= this.props.route.params.StoreCityData
   console.log("token Id in data: ",this.state.authtoken)

  console.log("props",this.props)
  

   const cityData= this.props.route.params.storeCityData
   console.log("city Data:",cityData)
  
  
  
  return(
    <SafeAreaView style={{flex:1,backgroundColor:"cyan"}}>
       <FlatList
          data={cityData}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: 'lightgreen',
                  borderWidth: 1,
                  margin: 5,
                  borderRadius: 5,
                }}>
                <View >
                  <Text
                    style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                    Store ID: {item.storeId}
                  </Text>
                  <Text
                    style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                    Store Name: {item.storeName}
                  </Text>
                  <Text
                    style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                    City: {item.city}
                  </Text>
                  {/* <Text
                    style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                    Retailer Name: {item.concept.retailer.retailerName}
                  </Text> */}
                </View>
                
              </View>
            );
          }}
        />

     
    </SafeAreaView>
  )
}





}
export default (Data)