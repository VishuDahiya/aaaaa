import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Stylesheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

function HeaderDecathlon() {
  const navigation = useNavigation();
  let data = {data};

  return (
    <>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 0.1,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={imagePath.headTop1}
              style={{height: 38, width: 25}}
            />
            <View style={{marginLeft: 5}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                Delivering to 160028
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: 'underline',
                }}>
                CHANGE
              </Text>
            </View>
          </View>
          <Image
            source={imagePath.headTop}
            style={{height: 90, width: 100, marginTop: -4}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 0,
            backgroundColor: 'white',
            paddingBottom: 15,
            marginTop: -10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.2,
              borderColor: '#F5F5F5',
              alignItems: 'center',
              marginHorizontal: 18,
              backgroundColor: '#F5F5F5',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}>
            <Image
              source={imagePath.headSearch}
              style={{height: 30, width: 25, marginHorizontal: 15}}
            />
            <TextInput
              placeholder="Search 70 Sports 5000 Products"
              style={{paddingRight: 49}}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.SHOWCART);
            }}>
            <View
              style={{
                borderWidth: 0.2,
                borderColor: '#F5F5F5',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 0,
              }}>
              <Image
                source={imagePath.headCart}
                style={{
                  height: 49,
                  width: 50,
                  backgroundColor: '#F5F5F5',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default HeaderDecathlon;
