import React, {useState} from 'react';
import './App.css';
import babyNames from './babyNames';
import DisplayBabyNames from './DisplayBabyNames';




function App(){
  const [typedValue,setTypedValue]= useState("");

  const handelEvent = (input) => {
    let typed = input.target.value.toLowerCase();
    setTypedValue(typed)
  }

    return (
    <div className="App">
      <input onChange={handelEvent} className="search" type="text" placeholder="search"></input>
        <DisplayBabyNames babyNames={babyNames} typedValue={typedValue} />
    </div>
  );
}

export default App;
