import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import DataApi from '../../Components/dataApi';
import SearchData from '../../Components/SearchData';
import WrapperContainer from '../../Components/WrapperContainer';
import {dataAPi} from '../../redux/actions/exploreAction';
import colors from '../../styles/colors';
import styles from './styles';

const LIMIT = '5';
export default class Explore extends Component {
  state = {
    profiles: [],
    skip: 0,
    isLoading: true,
    isListEnd: false,
    isLoadingMore: false,
    isNoMoreData: false,
    refreshing: false,
  };
  componentDidMount = () => {
    this.getData();
    // let { limit, skip } = this.state;
    // dataAPi({
    //   "searchType": "LEADERBOARD", "limit": `${limit}`, "skip": `${skip}`
    // }).then((res) => {
    //   this.setState({ data: res.data })
    //   console.log(res.data, 'userData at explore@@@@@@@@')
    // }).catch((error) => {
    //   console.log(error)
    // })
  };

  getData = (onEndReachCall = false) => {
    const {skip, profiles, isListEnd} = this.state;

    let calcSkip = onEndReachCall ? skip + profiles.length : 0;

    let data = {
      searchType: 'LEADERBOARD',
      limit: LIMIT,
      skip: calcSkip.toString(),
    };
    console.log(data);
    // console.log(header);
    dataAPi(data)
      .then(res => {
        // console.log('this is the response: ', res);
        let updatedStateVar = {};
        if (res.data.length > 0) {
          let profilesData = onEndReachCall
            ? [...profiles, ...res.data]
            : res.data;

          updatedStateVar = {
            profiles: profilesData,
          };
        } else {
          updatedStateVar = {
            isListEnd: true,
            isNoMoreData: true,
          };
        }

        this.setState({
          ...updatedStateVar,
          isLoading: false,
          isLoadingMore: false,
          refreshing: false,
        });
      })
      .catch(err => {
        // console.log('this is the error: ', err);
        this.setState({isLoading: false, isLoadingMore: false});
      });
  };

  _onRefresh = () => {
    this.setState({refreshing: true, isNoMoreData: false});
    this.getData();
  };
  renderFooter = () => {
    const {isLoadingMore} = this.state;
    if (isLoadingMore) {
      return (
        <View style={{paddingBottom: 40}}>
          <MaterialIndicator color={colors.themeGreen} />
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };
  onEndReached = () => {
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.getData(true);
  };

  render() {
    const {isLoading, profiles, refreshing} = this.state;
    console.log(profiles);
    return (
      <WrapperContainer isLoading={isLoading}>
        <TextInput placeholder="Search" style={styles.search} />
        <SearchData />
        {
          <DataApi
            profiles={profiles}
            onRefresh={this._onRefresh}
            refreshing={refreshing}
            onEndReached={this.onEndReached}
            renderFooter={this.renderFooter}
          />
        }
      </WrapperContainer>
    );
  }
}
