import { useState } from "react";

function Users(props) {
  const [state, setState]=useState(0)
    const plasHandler =()=>{
      setState(state+1)
      console.log(state);
    }
    
      
      const plasHandler2 =()=>{
        if (state>0) {
          
          setState(state-1)
          console.log(state);
        }
      }
    
    return (
      <div className="Users">
        <button onClick={plasHandler}>+</button>
        <h2>{state}</h2>
        <button onClick={plasHandler2}>-</button>
      </div>
    );
  }
  
  export default Users;
  