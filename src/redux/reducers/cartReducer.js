import {action} from '../actions/action'
import types from '../types';

const initialState = {
  cardList: [],
  counter:0,
  
};

export default function cartReducer(state = initialState, action) {
  let {cardList} = state;
  // alert()
  
  switch (action.type) {
    case types.ADD_To_CART: {
      // cardList.push(action.payload)
      // console.log(cardList, "//////")
      action.payload.value.num=1;
      return {
        ...state,
        cardList: [...cardList, action.payload],
        counter:cardList.length+=1
      };
    }
    case types.EDIT_CART: {
      let editedCard = [...cardList];
      console.log(editedCard, action.payload)
      // editedCard[action.payload].qty++ ;
      // [action.payload.index].num+=1;
      return {
        ...state,
        cardList: editedCard,
      };
    }
    case types.DELETE_CART: {
      // alert(action.payload)
      let deleteCard = [...cardList];

      console.log(deleteCard)
      deleteCard = deleteCard.filter(
        value => value.value.id != action.payload
      );
      return {
        ...state,
        cardList: deleteCard,
        counter:cardList.length-=1
      };
    }
    
    default:
      return {
        ...state,
      };
  }
}
