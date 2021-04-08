import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatDisplay from '../../Components/ChatDisplay';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import { userMessage } from '../../redux/actions/exploreAction';
import colors from '../../styles/colors';

export default class Chat extends Component {
    state = {
        limit: 10,
        skip: 0,
        chats: [],
        isLoading: false,
    }

    getData = (query) => {
        this.setState({ isLoading: true, chats: [] }, () => {
            userMessage(query).then(res => {
                console.log(res);
                this.setState({ chats: res.data, isLoading: false })
            }).catch(err =>
                this.setState({ isLoading: false }))
        })
    }

    componentDidMount = () => {
        let { limit, skip } = this.state;
        let query = `?limit=${limit}&skip=${skip}`;
        this.getData(query);
    }

    render() {
        let { chats } = this.state;
        console.log(chats);
        return (
            <WrapperContainer >
                <Text style={styles.txt}>Messages</Text>
                <ChatDisplay data={chats} />
            </WrapperContainer>
        )
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: colors.darkBlue,
        paddingVertical: 25,
        marginBottom: 5,
        color: colors.white,
    },

})