import produce from 'immer';

const INITIAL_STATE = {
  product: [],
  count: 0,
  total: 0
}

export default function cartReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type){
      case "@ADD_TO_CART": {
        const productIndex = state.product.findIndex(p => {
          return p.data.id === action.payload.data.id
        })

        draft.total += action.payload.data.price
        draft.count += 1;

        if (productIndex >= 0){
          draft.product[productIndex].amount += 1;           
        }
        else{
          draft.product.push({
          ...action.payload,
          amount: 1
        })   

        }       
      break;
      }

      case "@REMOVE_FROM_CART": {
        const productIndex = state.product.findIndex(p => {
          return p.data.id === action.payload.id
        })

        draft.count -= 1;
        draft.total -= draft.product[productIndex].data.price

        if(state.product[productIndex].amount > 1){
          draft.product[productIndex].amount = draft.product[productIndex].amount - 1
        }else{
          draft.product.splice(productIndex, 1)
        }

        break;
      }

      default: 
    }
  })
}