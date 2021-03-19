import React from 'react';
import {Text, View, Image, Stylesheet, ScrollView} from 'react-native';
import imagePath from '../constants/imagePath';
function HeaderCategoryDecathlon(props) {
  let {data} = props;
  return (
    <View style={{backgroundColor: 'white', marginVertical: 8}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollSale}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  fontWeight: 'normal',
                  fontFamily: 'sans-serif',
                  color: 'grey',
                  fontSize: 12,
                  width: 70,
                }}>
                OFFERS
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollMen}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  fontWeight: 'normal',
                  color: 'grey',
                  fontFamily: 'sans-serif',
                  fontSize: 13,
                  width: 70,
                }}>
                MEN
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollWomen}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  fontWeight: 'normal',
                  color: 'grey',
                  fontFamily: 'sans-serif',
                  fontSize: 13,
                  width: 70,
                }}>
                WOMEN
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollkid}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  fontWeight: 'normal',
                  color: 'grey',
                  fontFamily: 'sans-serif',
                  fontSize: 13,
                  width: 70,
                }}>
                KIDS
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollBeauty}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 5,
                  textAlign: 'center',
                  fontWeight: 'normal',
                  color: 'grey',
                  fontFamily: 'sans-serif',
                  fontSize: 13,
                  width: 70,
                }}>
                BEAUTY
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={imagePath.scrollHome}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  marginTop: 5,
                  fontWeight: 'normal',
                  color: 'grey',
                  fontFamily: 'sans-serif',
                  fontSize: 13,
                  width: 70,
                }}>
                HOME
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
export default HeaderCategoryDecathlon;
