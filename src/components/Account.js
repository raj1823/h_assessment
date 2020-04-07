import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import SignIn from './SignIn'
import wishlist from '../components/Wishlist'
import wish from '../components/Wishlist';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingData: [
        {
          category: 'Track Order',
          location: require('../assets/track.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Size Chart',
          location: require('../assets/sizeChart.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Notification',
          location: require('../assets/notification.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Store Locator',
          location: require('../assets/store.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Country',
          location: require('../assets/country.png'),
          Flocation: require('../assets/flag.png'),
          currency: 'AEM',
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Language',
          location: require('../assets/language.png'),
          lan: 'ENG',
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'About Us',
          location: require('../assets/about.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'FAQ',
          location: require('../assets/faq.png'),
          arrow_path: require('../assets/arrow.png'),
        },
        {
          category: 'Shipping & Returns',
          location: require('../assets/shipping.png'),
          arrow_path: require('../assets/arrow.png'),
        },
      ],
      modalVisible: false,
      display_picture: require('../assets/about.png'),
      
    };
  }

  render() {
    const {modalVisible} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: 30, backgroundColor: 'white'}}></View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              paddingBottom: 20,
              backgroundColor: '#fff',
            }}>
            <View style={{flex: 1, marginLeft: 20}}>
              <Text
                style={{fontSize: 24, fontWeight: '400', marginVertical: 10}}>
                Welcome!
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#FEFCEE',
                    flex: 7.5,
                  }}>
                      <TouchableOpacity onPress={wish.render}>
                  <Text style={{margin: 10, fontSize: 15}}> SIGN IN</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={{
                      height: 17,
                      width: 1,
                      borderWidth: 1,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{margin: 10, fontSize: 15}}> JOIN</Text>
                </View>
                <View style={{flex: 2.5}}></View>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 20}}>


                    
              <Modal
                animationType="slideInDown"
                transparent={false}
                visible={modalVisible}
                hasBackdrop={true}
                
              >
                <View style={{width:400}}>
                <FlatList
                  data={this.state.settingData}
                  
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({display_picture: item.location});
                        }}>
                          <SafeAreaView><View style={{flexDirection:"row",backgroundColor:"cyan",marginHorizontal:20}}>
                        <Image
                          source={item.location}
                          style={{
                            height: 40,
                            
                            width: 40,
                            margin: 10,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                          }}
                        />
                        <Text style={{marginLeft:20,fontSize:16,fontWeight:'300',alignSelf:"center"}}>{item.category}</Text>
                        </View>
                        </SafeAreaView>
                      </TouchableOpacity>
                    );
                  }}>
                  
                </FlatList>

                <TouchableHighlight
                  style={{...style.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Text style={style.textStyle}>Close </Text>
                </TouchableHighlight>
                </View>
              </Modal>
              

              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 40,
                    borderColor: 'orange',
                    backgroundColor: '#FEFCEE',
                    padding: 20,
                    marginRight: 20,
                  }}>
                  <Image
                    source={this.state.display_picture}
                    style={{height: 40, width: 40, resizeMode: 'contain'}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={this.state.settingData}
            renderItem={({item}) => {
              switch (item.category) {
                case 'Country':
                  return (
                    <View style={[style.blockStyle, {flex: 1}]}>
                      <Image source={item.location} style={style.icons} />

                      <Text style={[style.text, {flex: 1}]}>
                        {' '}
                        {item.category}
                      </Text>
                      <View style={style.innerBlok}>
                        <Image
                          source={item.Flocation}
                          style={{
                            height: 20,
                            width: 30,
                            resizeMode: 'stretch',
                            alignSelf: 'center',
                          }}
                        />
                        <Text style={[style.text1, {marginHorizontal: 10}]}>
                          {item.currency}
                        </Text>

                        <Image
                          source={item.arrow_path}
                          style={style.arrowStyle}
                        />
                      </View>
                    </View>
                  );

                case 'Language':
                  return (
                    <View style={style.blockStyle}>
                      <Image source={item.location} style={style.icons} />

                      <Text style={style.text}> {item.category}</Text>

                      <View style={style.innerBlok}>
                        <Text style={[style.text1, {marginHorizontal: 10}]}>
                          {item.lan}
                        </Text>
                        <Image
                          source={item.arrow_path}
                          style={style.arrowStyle}
                        />
                      </View>
                    </View>
                  );

                case 'Store Locator':
                  return (
                    <View style={[style.blockStyle, {marginBottom: 10}]}>
                      <Image source={item.location} style={style.icons} />

                      <Text style={style.text}> {item.category}</Text>
                      <View style={style.innerBlok}>
                        <Image
                          source={item.arrow_path}
                          style={style.arrowStyle}
                        />
                      </View>
                    </View>
                  );

                default:
                  return (
                    <View style={style.blockStyle}>
                      <Image source={item.location} style={style.icons} />

                      <Text style={style.text}> {item.category}</Text>

                      <View style={style.innerBlok}>
                        <Image
                          source={item.arrow_path}
                          style={style.arrowStyle}
                        />
                      </View>
                    </View>
                  );
              }
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  icons: {height: 30, width: 30, margin: 20},
  text: {alignSelf: 'center', fontSize: 17},
  blockStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    alignContent: 'center',
  },
  innerBlok: {flex: 1, justifyContent: 'flex-end', flexDirection: 'row'},
  arrowStyle: {height: 17, width: 15, margin: 19, alignSelf: 'center'},
  text1: {marginVertical: 18, fontSize: 18, alignSelf: 'center'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:20
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default Account;