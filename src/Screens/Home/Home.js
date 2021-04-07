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
  Touchable,
} from 'react-native';
import MyCarousel from '../../Components/Carousel';
import ShoesCard from '../../Components/ShoesCards';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import HeaderDecathlon from '../../Components/HeaderDecathlon';
import HeaderCategoryDecathlon from '../../Components/HeaderCategoryDecathlon';
import {connect} from 'react-redux';
import {addToCart, deleteCart, editCart} from '../../redux/actions/action';
import { getUserData } from '../../utils/utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesList: [
        {qty:1,
          id: 1,
          image1: require('../../assets/images/image4.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 2,
          image1: require('../../assets/images/image6.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 3,
          image1: require('../../assets/images/image2.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 4,
          image1: require('../../assets/images/image7.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {
          qty:1,
          id: 5,
          image1: require('../../assets/images/image8.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 6,
          image1: require('../../assets/images/image1.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 7,
          image1: require('../../assets/images/image6.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 8,
          image1: require('../../assets/images/image7.jpg'),
          name: 'Roadster',
          type: 'Men Solid Sneakers',
          discountPrice: '₹1920',
          originalPrice: '₹̶3̶4̶9̶9̶',
          offPrice: '45 % OFF',
        },
        {qty:1,
          id: 9,
          image1: require('../../assets/images/image8.jpg'),
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

  // onPressButton = value => {
  //   let {cardData} = this.state;
  //   let index = cardData.findIndex(item => item.id == value.id);
  //   if (index != -1) {
  //     cardData[index].num = cardData[index].num + 1;
  //     this.setState({cardData: cardData});
  //   } else {
  //     value.num = 1;
  //     let newCardData = (cardData = [...cardData, ...[value]]);
  //     this.setState({counter: this.state.counter + 1, cardData: newCardData});
  //   }
  // };

  // componentDidMount() {
  //   this.focusListner = this.props.navigation.addListener('focus', () => {
  //     if (this.props.route.params && this.props.route.params.add) {
  //       let {cardData} = this.state;
  //       let index = cardData.findIndex(
  //         item => item.id == this.props.route.params.add.id,
  //       );
  //       if (index != -1) {
  //         cardData[index].num = cardData[index].num + 1;
  //         this.setState({cardData: cardData});
  //       } else {
  //         this.props.route.params.add.num = 1;
  //         let newCardData = [...cardData, ...[this.props.route.params.add]];
  //         this.setState({
  //           counter: this.state.counter + 1,
  //           cardData: newCardData,
  //         });
  //       }

  //       this.props.navigation.setParams({add: undefined});
  //     }
  //   });
  // }
  // componentWillUnmount() {
  //   if (this.focusListner) {
  //     this.focusListner();
  //   }
  // }
  state = {
    value: {name: 'vd', id: 1},
  };
  render() {



    getUserData().then(res=>console.log(res, '@@@@@@getUserData')).catch(err=>console.log(err))
    
    let {value} = this.state;
    let {shoesList,} = this.state;
    return (
      <>
     
        <HeaderDecathlon onAddCount={this.props.counter}/>
        <ScrollView>
          {/* <Text>{this.props.counter}</Text> */}
          <HeaderCategoryDecathlon />
            <MyCarousel />
          <View style={{marginTop: 10}}>
            {<ShoesCard onAdd={this.props.addToCart} shoesList={shoesList} />}
          </View>
        </ScrollView> 
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
  counter:state.cartReducer.counter
  };
};
const mapDispatchToProps = dispatch => {
  return ({
    addToCart: value => dispatch(addToCart(value)),
    editCart: index => dispatch(editCart(index)),
    deleteCart: index => dispatch(deleteCart(index)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
