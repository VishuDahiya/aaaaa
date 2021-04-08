import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, RefreshControl } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

export default function DataApi(props) {
    let { profiles, onRefresh, refreshing, onEndReached, renderFooter } = props;
    let _renderItem = ({ item }) => {
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
        } = item;

        return (

            < View style={styles.dataView} >
                <View style={styles.innerView}>
                    <View>
                        <Image source={{ uri: profileImg[1].original }} style={styles.imageStyle} />
                        <View style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Text>{fullName}</Text>
                            <Text>{gender}</Text>
                        </View>
                    </View>
                    <View style={styles.innerView1}>
                        <Text style={{ marginRight: 100, fontStyle: 'italic', fontSize: 15 }}>{bio.slice(0, 70)}</Text>
                        <Text>{questions[1]}</Text>
                        <Text>Looking for: {lookingFor}</Text>
                        <Text>From: {addressDetails.address}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>DOB: :{dob.date}</Text>
                            <Text>/{dob.month}</Text>
                            <Text>/{dob.year}</Text>
                        </View>
                        <Text style={{ marginTop: 10, right: 0 }}>{email}</Text>
                    </View>
                </View>
            </View >
        )
    }
    return (
        <FlatList
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            data={profiles}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={onEndReached}
            ListFooterComponent={renderFooter}
        />
    );
}

const styles = StyleSheet.create({
    dataView: {
        backgroundColor: colors.white,
        marginVertical: 6,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 15,
        marginHorizontal: 2,

        shadowColor: "#000",
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
        flexDirection: 'row'
    },
    innerView1: {
        marginLeft: 8,
    }
})