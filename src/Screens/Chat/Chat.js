import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChatDisplay from '../../Components/ChatDisplay';
import Loader from '../../Components/Loader';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import {
  getUserMessgeOneToOne,
  userMessage,
} from '../../redux/actions/exploreAction';
import styles from './styles';

export default class Chat extends Component {
  state = {
    limit: 10,
    skip: 0,
    chats: [],
    isLoading: false,
    commonConversationData: [],
  };

  getData = query => {
    this.setState({isLoading: true, chats: []}, () => {
      userMessage(query)
        .then(res => {
          console.log(res);
          this.setState({chats: res.data, isLoading: false});
        })
        .catch(err => this.setState({isLoading: false}));
    });
  };

  getUserData = commonConversationId => {
    let query = `?commonConversationId=${commonConversationId}`;
    this.setState({isLoading: true, commonConversationData: []}, () => {
      getUserMessgeOneToOne(query)
        .then(res => {
          this.props.navigation.navigate(navigationStrings.CHAT_DETAILS, {
            chats: res.data,
          });
          this.setState({commonConversationData: res.data, isLoading: false});
        })
        .catch(err => this.setState({isLoading: false}));
    });
  };

  componentDidMount = () => {
    let {limit, skip} = this.state;
    let query = `?limit=${limit}&skip=${skip}`;
    this.getData(query);
  };

  render() {
    let {chats} = this.state;
    console.log(chats);
    return (
      <WrapperContainer>
        <Text style={styles.txt}>Messages</Text>
        <ChatDisplay data={chats} moveTo={this.getUserData} />
      </WrapperContainer>
    );
  }
}
