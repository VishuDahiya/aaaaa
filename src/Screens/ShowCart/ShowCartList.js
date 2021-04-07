import React from 'react';
import {Text, View, Stylesheet,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { editCart } from '../../redux/actions/action';


 function ShowCartList (props){
   let {remove,quantity,nam}=props;
  //  alert(nam)
   let {id,name,image1,type,discountPrice,offPrice,originalPrice ,qty} = props.data.item.value
   console.log(props.data.item.value)
  //  alert(id)
    return(
    
        <View style={{backgroundColor:'white',marginBottom:4}}>
            <View style={{flexDirection:'row',backgroundColor:'white',paddingHorizontal:10,paddingVertical:8}}>
            <Image source={image1} style={{height:110,width:100,marginRight:15}}/>
            <View style={{paddingVertical:8}}>
        <Text style={{fontSize:19,fontWeight:'800'}}>{name}</Text>
        <Text style={{fontSize:16,fontWeight:'600',color:'grey'}}>{type}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:16,marginRight:10}}>{discountPrice}</Text>
        <Text style={{fontSize:16}}>{originalPrice}</Text>
        </View>
        <Text style={{fontSize:14,color: '#E56717'}}>{offPrice}</Text>
        <View style={{flexDirection:'row',marginTop:5}}>
       <TouchableOpacity onPress={()=>props.editCart(id)}><Text style={{borderWidth:1,paddingHorizontal:5,fontSize:20,marginRight:5,textAlign:'center'}}>+</Text></TouchableOpacity>
          <Text style={{fontSize:17,marginRight:5}}>Qty :{qty}</Text>
         <TouchableOpacity><Text style={{borderWidth:1,paddingHorizontal:7,fontSize:20,textAlign:'center'}}>-</Text></TouchableOpacity>
        </View>
        </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginHorizontal:20,
            marginBottom:8
          }}>
          <TouchableOpacity>
            <Text
              style={{
                borderWidth: 0.2,
                borderColor: 'grey',
                fontSize: 15,
                padding: 10,
                paddingLeft: 55,
                width: '140%',
              }}>
              WISHLIST
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>remove(id)}>
            <Text
              style={{
                borderWidth: 0.1,
                fontSize: 15,
                padding: 10,
                width: '97%',
                paddingLeft: 60,
                backgroundColor: '#318dc6',
                marginLeft: 60,
                color: 'white',
              }}>
              REMOVE
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    )
}
const mapStateToProps=state=>{
  return{}
}
const mapDispatchToProps= dispatch=>{
  return {
    editCart:index=>{dispatch(editCart(index))},
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(ShowCartList)