import { legacy_createStore } from "redux";
const initial = {
  num: 0,
  count: 100,
};

const reducer = (prevstate = initial, action) => {
  switch (action.type) {
    case "setNum":
      return { ...prevstate, num: action.payload };
      break;
    case "setCount":
      return { ...prevstate, count: action.payload };
      break;
  }
  return prevstate;
};
const store2 = legacy_createStore(reducer);
export default store2;

