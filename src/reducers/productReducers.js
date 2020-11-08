import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FETCH_FILTER_PRODUCTS
} from "../types";



function filterByMe(arr, term) {  
  let matches = [];
  term.map(i => {  
      const filterData =   arr.children.find(values => values.key ===i);
      if(filterData) {
        matches = [...matches, filterData];
      }
  })
  return matches;
}


function filterByPr(key, filterstate){
  const final = []; 
  filterstate.map(obj=>{
    const ttt = filterByMe(obj, key);
    if(ttt.length >0){
      final.push(Object.assign({}, obj, { children: ttt }));
    }
  })  
  return final;
}

export const productsReducer = (state = [], action) => {
  console.log('staet', state)
  console.log('action', action)
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredItems: filterByPr(action.payload, state.items),
      };
  
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: [] };
    case FETCH_FILTER_PRODUCTS:
        return { items: action.payload, filteredItems: action.payload };

    default:
      return state;
  }
};
