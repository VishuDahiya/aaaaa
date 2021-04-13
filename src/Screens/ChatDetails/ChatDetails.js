import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {GiftedChat, Bubble, Composer, Send} from 'react-native-gifted-chat';
import styles from './styles';
import {connect} from 'react-redux';
import socketServices from '../../utils/socketSevice';
import actions from '../../redux/actions';
import {getUserMessgeOneToOne} from '../../redux/actions/exploreAction';
import {SOCKET_STRINGS} from '../../constants/socketStrings';
import WrapperContainer from '../../Components/WrapperContainer';

class ChatDetails extends Component {
  state = {
    messages: [],
    isLoading: true,
  };

  componentDidMount() {
    let {userData} = this.props;
    socketServices.initializeSocket(userData.accessToken);
    setTimeout(() => {
      this.getChatListing();
      socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
    });
  }

  onSend(messages = []) {
    // alert(JSON.stringify(socketServices.emit));

    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const {id, commonConversationId, fullName} = this.props.route.params;
    const {userData} = this.props;

    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    console.log(messages);
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  componentWillUnmount() {
    socketServices.removeListener(SOCKET_STRINGS.ACKNOWLEDGED_SENT_BY_RECEIVER);
    socketServices.removeListener(SOCKET_STRINGS.RECEIVED_MESSAGE);
  }

  getChatListing = () => {
    const {commonConversationId, id, Name} = this.props.route.params;
    getUserMessgeOneToOne(
      `?commonConversationId=${commonConversationId}&limit=100`,
    )
      .then(res => {
        // const {profileImg} = this.props.route.params;
        // console.log(profileImg, 'THIS IS PROFILE');

        //To send back response that all the messages have been seen;
        socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
          senderId: id,
          isRead: true,
          recieverId: (this.props.userData && this.props.userData._id) || '',
        });
        // });
        //Initalizing the chat history

        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId?._id,
              name: Name,
              // avatar: profileImage && profileImg[0].thumbnail,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({isLoading: false, messages});
      })
      .catch(error => {
        console.log(error);
      });
  };

  onReceiveMessage = data => {
    const {commonConversationId} = this.props.route.params;
    const message = {
      _id: data._id,
      text: data.text,
      createdAt: data.createdAt,
      user: {
        _id: data.senderId,
        name: firstName,
        avatar: profileImg && profileImg[0].thumbnail,
      },
    };
    // console.log(data,"----------data")
    // console.log(commonConversationId,'the commonejoijoj');
    //To make sure that all the messages are seen if new message comes

    if (data.commonConversationId === commonConversationId) {
      socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
        senderId: data.senderId,
        isRead: true,
        recieverId: data.recieverId,
      });

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    }
  };
  render() {
    const {
      commonConversationId,
      id,
      Name,
      profileImage,
      updatedAt,
    } = this.props.route.params;
    // console.log(commonConversationId, id, fullName, profileImg);
    const {userData} = this.props;
    const {messages, isLoading} = this.state;
    console.log(messages, 'THIS IS MESSAGES');
    return (
      <WrapperContainer isLoading={isLoading}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={imagePath.backButton} style={styles.image} />
          </TouchableOpacity>
          <Image source={{uri: profileImage}} style={styles.profileImage} />
          <Text style={styles.txt}>{Name}</Text>
        </View>
        <View></View>
        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: userData._id,
          }}
        />
      </WrapperContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userData: state.auth.userData,
  };
};
export default connect(mapStateToProps)(ChatDetails);
