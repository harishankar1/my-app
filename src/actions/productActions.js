import { FETCH_PRODUCTS, FETCH_FILTER_PRODUCTS, FILTER_PRODUCTS } from "../types";
// import { FILTER_PRODUCTS } from "../types";
const treeData = [
  {
    title: 'Fruits',
    key: 'Fruits',
    children: [
      { title: 'Apple', key: 'Fruits-Apple', },
      { title: 'Banana', key: 'Fruits-Banana',},
      { title: 'Orange', key: 'Fruits-Orange', },
      { title: 'Cherry', key: 'Fruits-Cherry', },
    ],
  },
  {
    title: 'Games',
    key: 'Games',
    children: [
      { title: 'Cricket', key: 'Games-Cricket' },
      { title: 'Hocky', key: 'Games-Hocky' },
      { title: 'Badminton', key: 'Games-Badminton' },
      { title: 'Football', key: 'Games-Football' },
    ],
  },
];
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  
  dispatch({
    type: FETCH_PRODUCTS,
    payload: treeData,
  });
};

export const fetachFilterProduct = () => async (dispatch) => {
  // const res = await fetch("https://fakestoreapi.com/products");
  // const data = await res.json();
  // console.log('data');
  // console.log(data);
  dispatch({
    type: FETCH_FILTER_PRODUCTS,
    payload: [],
  });
};

export const filterProducts = (products) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload:products,
  });
};
