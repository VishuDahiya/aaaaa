import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default function UserDataSearch(props) {
  let {data} = props;
  let _renderItem = ({item}) => {
    const {
      addressDetails,
      dob,
      email,
      questions,
      fullName,
      gender,
      profileImg,
      bio,
      lookingFor,
      contactDetails,
    } = item;
    return (
      <View style={styles.dataView}>
        <View style={styles.innerView}>
          <View>
            <Image
              source={{uri: profileImg[1].original}}
              style={styles.imageStyle}
            />
            <View style={styles.contentTxt}>
              <Text>{fullName}</Text>
              <Text>{gender}</Text>
            </View>
          </View>
          <View style={styles.innerView1}>
            <Text style={styles.bioTxt}>{bio.slice(0, 70)}</Text>
            <Text>{questions[1]}</Text>
            <Text>Looking for: {lookingFor}</Text>
            <Text>From: {addressDetails.address}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>DOB: :{dob.date}</Text>
              <Text>/{dob.month}</Text>
              <Text>/{dob.year}</Text>
            </View>
            <Text style={styles.emailTxt}>{email}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
    />
  );
}
const styles = StyleSheet.create({
  dataView: {
    backgroundColor: colors.white,
    marginVertical: 3,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 15,
    marginHorizontal: 2,
    backgroundColor: colors.selfOrange,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  innerView: {
    flexDirection: 'row',
  },
  innerView1: {
    marginLeft: 8,
  },
  contentTxt: {
    alignItems: 'center',
    marginVertical: 5,
  },
  bioTxt: {
    marginRight: 100,
    fontStyle: 'italic',
    fontSize: 15,
  },
  emailTxt: {
    marginTop: 10,
  },
});
