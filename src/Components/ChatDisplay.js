import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';


export default function ChatDisplay(props) {
    let { data, moveTo } = props;

    let _renderItem = ({ item }) => {
        const {
            userInfo,
            lastMessage,
            commonConversationId,
        } = item;

        return (
            <View style={styles.outerView}>
                <View style={styles.innerView}>
                    <Image source={{ uri: userInfo.profileImg[0].original }} style={styles.image} />
                    <View style={styles.innerText}>
                        <TouchableOpacity onPress={() => moveTo(commonConversationId)}>
                            <Text>{userInfo.fullName}</Text>
                            <Text>{lastMessage[0].text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={imagePath.deleteButton} style={styles.deleteImg} />
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
const styles = StyleSheet.create({
    outerView: {
        flexDirection: 'row',
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    innerView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    innerText: {
        justifyContent: 'space-around'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    deleteImg: {
        height: 28,
        width: 25,
    }
})