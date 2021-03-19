import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MyCarousel from '../../Components/Carousel';
import ShoesCard from '../../Components/ShoesCards';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import HeaderDecathlon from '../../Components/HeaderDecathlon';
import HeaderCategoryDecathlon from '../../Components/HeaderCategoryDecathlon';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesList: [
        {
          id: 1,
          image1: require('../../assets/images/image4.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {
          id: 2,
          image1: require('../../assets/images/image6.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {
          id: 3,
          image1: require('../../assets/images/image2.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {
          id: 4,
          image1: require('../../assets/images/image2.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {
          id: 5,
          image1: require('../../assets/images/image2.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
      ],
      counter: 0,
    };
  }

  onPressButton = value => {
    let {cardData} = this.state;
    let index = cardData.findIndex(item => item.id == value.id);
    if (index != -1) {
      cardData[index].num = cardData[index].num + 1;
      this.setState({cardData: cardData});
    } else {
      value.num = 1;
      let newCardData = (cardData = [...cardData, ...[value]]);
      this.setState({counter: this.state.counter + 1, cardData: newCardData});
    }
  };

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params && this.props.route.params.add) {
        let {cardData} = this.state;
        let index = cardData.findIndex(
          item => item.id == this.props.route.params.add.id,
        );
        if (index != -1) {
          cardData[index].num = cardData[index].num + 1;
          this.setState({cardData: cardData});
        } else {
          this.props.route.params.add.num = 1;
          let newCardData = [...cardData, ...[this.props.route.params.add]];
          this.setState({
            counter: this.state.counter + 1,
            cardData: newCardData,
          });
        }

        this.props.navigation.setParams({add: undefined});
      }
    });
  }
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }

  render() {
    let {shoesList, counter} = this.state;
    return (
      <SafeAreaView>
        <HeaderDecathlon data={counter} />
        <ScrollView style={{marginBottom: 45}}>
          <HeaderCategoryDecathlon />

          <View>
            <MyCarousel />
          </View>

          <View style={{marginBottom: 85, marginTop: 10}}>
            {<ShoesCard onAdd={this.onPressButton} shoesList={shoesList} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
