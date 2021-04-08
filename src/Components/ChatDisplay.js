import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ChatDisplay(props) {
    let { data } = props;

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
            contactDetails,
        } = item;

        return (
            <View>
                <Text>cnlicn</Text>
            </View>
        )
    }




    return (
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
        />
    )



}