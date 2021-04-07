import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import {Text, View, Stylesheet, TouchableOpacity, FlatList,Image} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import { deleteCart, editCart,} from '../../redux/actions/action';
import ShowCartList from './ShowCartList';

function ShowCart(props) {
  // let {data} = props;
  // let {image1, name, type, discountPrice, originalPrice, offPrice} = data;
  const navigation = useNavigation();
  return (
      <>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',paddingVertical:15}}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={imagePath.backButton}
              style={{marginLeft: 10, height: 20, width: 35}}
            
            />
          </TouchableOpacity>
        <Text style={{fontSize:20,marginHorizontal:10}}>Shopping List</Text>
        </View>
       <FlatList 
       data={props.cardList}
       keyExtractor={(item)=>item.id}
       renderItem={((item, index)=> (<ShowCartList data={item} nam={index}  remove={props.deleteCart} quantity={props.quantity} />))}/>
  </>

  );
}
const mapStateToProps = state => {
  return {
    cardList: state.cartReducer.cardList,
    quantity: state.cartReducer.quantity,
  };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    deleteCart:index=>{dispatch(deleteCart(index))},
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCart);
