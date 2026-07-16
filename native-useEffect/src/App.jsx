import { useState, useEffect } from 'react'
import './App.css'

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(time);
      setTime((t) => {
        console.log(t); 
        return t + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time} seconds</div>;
}


function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  // const [selectedName, setSelectedName] = useState(null);
  // useEffect(() => {
  //   if (selectedName) {
  //     fetch(`/${selectedName.toLowerCase()}.json`)
  //       .then((response) => response.json())
  //       .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  const onSelectedNameChange = (name) => {
    fetch(`/${name.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (

    <div>
      <StopWatch />
      <div>
        {names.map((name) => (
          // <button onClick={() => setSelectedName(name)}>{name}</button>
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}

        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>


    </div>
  );
}

export default App
