import { useState } from 'react'
import './App.css'

function NameList() {
  const [list, setList] = useState(['John', 'Jane', 'Jack']);
  const [name, setName] = useState(()=>"joe");

  function addName() {
    setList([...list, name]);
    setName('');
  }

  return <div>
    <ul>
      {list.map((name, index) => <li key={index}>{name}</li>)}
    </ul>

    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={addName}>Add Name</button>

  </div>

}


function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return <div className='App'>

    <button onClick={addOne}>Count = {count}</button>

  </div>

}

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
    </div>
  )
}

export default App
