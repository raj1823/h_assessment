import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, View,StyleSheet, Image,InputText, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

class MyCart extends React.Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <SafeAreaView style={{backgroundColor:"#FFF"}}>

                <View style={{backgroundColor:"white"}}>
                    <Text style={{alignSelf:"center",margin:6,fontSize:16}}>My Cart</Text>
                    <Text style={{margin:5,alignSelf:"center",fontSize:8}}>1 Item</Text>
                <View>
                    <View style={{height:0.5,borderWidth:0.7,borderColor:"#7a807c",marginVertical:7}}></View>
                   <View style={{flexDirection:"row"}}>
                       <View style={{flex:1}}></View>

                        <Text style={{fontSize:9,flex:3}}> FREE STANDARD DELIVERY ON ORDERS ABOVE AED 250</Text>
                    </View> 


                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:3,alignItems:"center"}}>
                        <Image source={require('../assets/truck.png')}
                                style={{height:30,width:40, resizeMode:"stretch"}} />
                         </View>       
                         
                         <View style={{height:0.2,borderWidth:0.4,alignSelf:"center",flex:3,borderColor:"grey"}}></View>
                         <View style={{flex:2}}></View>

                    </View>


                    <View style={{flexDirection:"row"}}>
                       <View style={{flex:1}}></View>

                        <Text style={{fontSize:9,flex:3}}>SHOP & COLLECT FOR FREEON ORDERS ABOVE AED 100</Text>
                    </View> 
                    <View style={{height:0.5,borderWidth:0.7,borderColor:"#7a807c",marginVertical:7}}></View>
                    
                    

                </View>
                </View>







                <View style={{margin:10,borderRadius:10,borderWidth:1}}>
                                     <Text style={{fontSize:16,margin:10}}>Tassa Elba</Text>
                                     <View style={{flexDirection:"row"}}>
                                         <View>
                                         <Image source={{uri: "https://contents.mediadecathlon.com/p1535562/k$d5b2bda483dcc0385bc5e14ab14db84b/men-s-3in1-waterproof-travel-jacket-travel-100-grey.jpg"}}
                                                style={{resizeMode:"stretch",height:70,width:60,marginHorizontal:10}}/>
                                          <Text style={{fontSize:13,margin:10}}>XL</Text>  
                                         </View>        
                                                <View style={{width:300}} >
                                                    <Text style={{fontSize:15}}>Mens Polo Cardigan Sweater, Ether</Text>
                                                    <Text style={{fontSize:15,fontWeight:'500'}}>AED 52</Text>
                                                   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                                   
                                                   <View style={{margin:3,flexDirection:"row"}}>
                                                      
                                                       <Text style={{margin:4}}>1</Text>
                                                      
                                                       </View>
                                                       </View>
                                                       <View style={{flexDirection:"row",justifyContent:"flex-end",marginBottom:10}}>

                                                           <TouchableOpacity>
                                                               <Text style={{fontSize:12,fontWeight:'400',borderWidth:1,marginHorizontal:8,paddingHorizontal:20,paddingVertical:10}}> SAVE FOR LATER</Text>
                                                           </TouchableOpacity>
                                                           <TouchableOpacity>
                                                               <Text style={{fontSize:12,fontWeight:'400',borderWidth:1,marginHorizontal:8,paddingHorizontal:20,paddingVertical:10}}> REMOVE</Text>
                                                           </TouchableOpacity>
                                                           </View>

                                                    </View>
                                         </View>


                                     </View>



                                     
                         
                                     <View style={{height:0.5,borderWidth:0.7,borderColor:"#7a807c",marginVertical:7}}></View>
                 <View style={{flexDirection:"row",borderWidth:1}}>
                     
                     <View style={{flex:1,alignItems:"center"}}>
                         
                         <View style={{flex:1,borderRadius:20,borderColor:"7a807c",padding:20,borderWidth:1,marginBottom:15}}>
                             <Image source={require('../assets/box.png')}
                                     style={{height:30,width:30,resizeMode:"contain",alignSelf:"center"}}/>
                             
                         </View>


                     </View>
                     <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
                         <View style={{borderRadius:20,borderColor:"7a807c",padding:20,borderWidth:1,flex:1}}>
                         <Image source={require('../assets/ship_box.png')}
                                     style={{height:30,width:30,resizeMode:"contain",alignSelf:"center"}}/>
                             
                         </View>


                     </View>
                     <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
                         <View style={{borderRadius:20,borderColor:"7a807c",padding:20,borderWidth:1,flex:1}}>
                         <Image source={require('../assets/money.png')}
                                     style={{height:30,width:30,resizeMode:"contain",alignSelf:"center",
                                     backgroundColor:"yellow"}}/>
                             
                         </View>


                     </View>
                     
                     
                     
                </View>   


                <View style={{flexDirection:"row",marginVertical:16,borderWidth:1}}>
                    <View style={{alignItems:"center",flex:1}}>
                        <Text stle={{fontWeight:'400',fontSize:12}}>FREE SHIPPING</Text>
                        <Text style={{fontSize:10}}>On all orders above</Text>
                        <Text style={{fontSize:10}}>AED 250</Text>
                    </View>


                    <View style={{alignItems:"center",flex:1}}>
                            <Text style={{fontWeight:'400',fontSize:12}}>SHOP AND COLLECT</Text>
                        <Text style={{fontSize:10}}>FREE Collect On all</Text>
                        <Text style={{fontSize:10}}>orders abovce AED 100</Text>


                    </View>


                    
                    
                    <View style={{alignItems:"center",flex:1}}>
                            <Text style={{fontWeight:'400',fontSize:12}}>CASH ON DELIVERY</Text>
                        <Text style={{fontSize:10}}>Find your easiest way to </Text>
                        <Text style={{fontSize:10}}>make payment</Text>


                    </View>


                    
                    
                    
                    
                    
                </View> 
                <View style={{height:0.5,borderWidth:0.7,borderColor:"#7a807c",marginVertical:7}}></View>                
                              

            
            </SafeAreaView>
        );


    }
}
export default MyCart