import { useState } from 'react';
import './App.css';
import Users from './content/Users';

function App() {
 const [form,setForm]=useState(false)
    const showForm=()=>{
      setForm(true)
      console.log('Hello');
    }
  return (
    <div className="App">
       <button onClick={showForm}>Click</button>
       {form===true ? <Users/>:null}
    </div>
  );
}

export default App;
