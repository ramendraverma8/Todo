import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
function App() {
  const [data, setData]= useState([])
  const [value, setValue] = useState("")
  const hhhhhh = () => {
    setData((prev) => {
      return [...prev, value]
    })
    setValue("")
  }
  const bc = (e) => {
    setValue(e.target.value)
  }
  const deleted = (id) => {
    console.log(id)
    setData((prev) => {
      return prev.filter((arrElement, index)=>{
        return index !== id


      })
    })
}

  return (
    <div className="App">
      <div>
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add a new task" value={value} on onChange={bc} />
        <button onClick={hhhhhh}>+</button>
        <ul>
        {data.map((item, index) => {
         return <Todo  key={index} id={index}item = {item} onSelect={deleted}/>
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
