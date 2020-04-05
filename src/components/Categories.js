import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import {Text, View,Image,Button,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CameraRoll from "@react-native-community/cameraroll";

class Categories extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={

         
           photos:[]
        }
    }
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
             console.log("cannot read images")
          });
        //console.log(CameraRoll)

        };
     render() {
      return (
          <SafeAreaView>
        <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />            
        <ScrollView>
       {this.state.photos.map((p, i) => {
       return (
          <View style={{backgroundColor:"cyan"}} >
         <Image
           key={i}
           style={{
             width: 300,
             height: 150,
             borderRadius:15,margin:10,alignSelf:"center"
           }}
           source={{ uri: p.node.image.uri }}
         />
        </View>
       );
     })}
     </ScrollView>
         
        </View>
        </SafeAreaView>
      );
     }

  
}

export default Categories;