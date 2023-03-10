import { useEffect, useState } from "react";
import axios from "axios";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
export default function Todo() {
  const [item, setItem] = useState();
  const [array, setArray] = useState([]);

  const count=useSelector(state=>state.count)
  

  const addTodo = (todo) => {
    // add the todo to the list
    array.push(item);

    console.log(array);
    
    
    // clear input box
    setItem("");
  };
  const handleremove = (e,indx) => {
    // array.splice(indx,1)
  //  setArray(array.filter((_, i) => i !== indx));
  const temp = [...array]
  temp.splice(indx,1)
  setArray(temp)
  };
  const dispatch=useDispatch();
  return (
    <>
      <div className="App">
        <h2>ToDo List APP</h2>{count}<button onClick={e=>dispatch({type:'setCount', payload: count/2})}>Increment</button>
        <div className="App_additem">
          <input
            type="text"
            placeholder="Add an item"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button
            className="Add_button"
            onClick={() => {
              addTodo(item);
            }}
          >
            Add{count}
          </button>
        </div>

        <div className="list">
          {array.map((itm, indx) => {
            return (
              <>
                <div className="row1">
                  <label className="list_text">{itm}</label>
                  <div>
                    <button
                      className="Delete_button"
                      onClick={(e) => {
                        handleremove(e,indx);
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

