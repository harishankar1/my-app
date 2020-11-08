import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  FETCH_SINGLE_PRODUCT,
} from "../types";

export const productsReducer = (state = {}, action) => {
  console.log('productsReducer', action);
  switch (action.type) {
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };

    case FETCH_SINGLE_PRODUCT:
        return { singleProduct: action.payload };
    default:
      return state;
  }
};
