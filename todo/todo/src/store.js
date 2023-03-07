import { legacy_createStore } from "redux";
const initial = {
  count: 100,
  Additem:"",
  array:[],
  
};
const reducer = (prevstate = initial, action) => {
  switch (action.type) {
    case "setCount":
      return { ...prevstate, count: action.payload };
      break;
      case "setAdditem":
      return { ...prevstate, Additem: action.payload };
      break;
      case "setArray":
      return { ...prevstate, array: action.payload };
      break;
      
  }
  return prevstate;
};
const store= legacy_createStore(reducer);
export default store;

