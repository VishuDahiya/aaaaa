import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Loader from '../../Components/Loader';
import UserDataSearch from '../../Components/UserDataSearch';
import WrapperContainer from '../../Components/WrapperContainer';
import {searchUser} from '../../redux/actions/exploreAction';
import styles from './styles';

class Search extends Component {
  state = {
    name: '',
    data: [],
    isLoading: false,
  };

  getData = query => {
    this.setState({isLoading: true});
    searchUser(query)
      .then(res => {
        console.log(res);
        this.setState({data: res.data, isLoading: false});
      })
      .catch(err => this.setState({isLoading: false}));
  };
  onChange = val => {
    this.setState({name: val});
    let query = `?name=${val}`;
    this.setState({data: [], isLoading: true});
    this.getData(query);
  };
  render() {
    let {isLoading, data} = this.state;
    return (
      <WrapperContainer>
        <TextInput
          placeholder="Search"
          onChangeText={this.onChange}
          style={styles.search}
        />
        <Loader isLoading={isLoading} />
        <UserDataSearch data={data} />
      </WrapperContainer>
    );
  }
}
export default Search;
