import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {

  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(3);
  const [names, setNames] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]);

  const onAddName = () => {
    setNames([
      ...names, 
      { 
        id: idRef.current++, 
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = '';
  };

  return (
    <div>
      <div>
        {names.map((name) => (
          <div key={name.name}>{name.id} - {name.name}</div>
        ))}
      </div>

      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

export default App
