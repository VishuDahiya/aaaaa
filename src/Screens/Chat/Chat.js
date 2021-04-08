import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChatDisplay from '../../Components/ChatDisplay';
import Loader from '../../Components/Loader';
import { userMessage } from '../../redux/actions/exploreAction';

class Chat extends Component {
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
                this.setState({ chats: res.chats, isLoading: false })
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
            <View>
                <Text>Chat</Text>
                <ChatDisplay data={chats} />
            </View>
        )
    }
}
export default Chat;