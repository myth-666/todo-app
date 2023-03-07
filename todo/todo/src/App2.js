import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App2.css'
export default function App2() {
  const Additem = useSelector((state) => state.Additem);
  const count = useSelector((state) => state.count);
  const array = useSelector((state) => state.array);

  const dispatch = useDispatch();
  const setAdditem = (e) => {
    // const Additem = e.target.value;
    dispatch({ type: "setAdditem", payload: e.target.value });
  };
  const pushitem = (e) => {
    array.push(Additem);
    dispatch({ type: "setArray", payload: array });
    dispatch({type:"setAdditem",payload:""})
    console.log(array);
   
  };
  const handleremove = (e,indx) => {
    
  const temp = [...array]
  temp.splice(indx, 1)
  dispatch({ type: "setArray", payload: temp });
  };
  return (
    <>
    <div className="App_container">
        <div className="App_box">
      <div className="App_Row1">
        <h2>ToDo List APP</h2>
        <div className="App_Additem"><input
        value={Additem}
        onChange={(e) => {
          setAdditem(e);
        }}
      />
      <button
        onClick={(e) => {
          pushitem(Additem);
        }}
      >
        Add
      </button></div></div>
      
        {array.map((itm,indx)=>{
            return(
                <><div className="App_list_row"><label className="App_list_text">{itm}</label>
                 <button className="App_list_button" onClick={()=>{handleremove(indx)}}>x</button></div></>
            )
        })}
       </div>
      </div>
      
    </>
  );
}
