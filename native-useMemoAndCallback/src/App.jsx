import { useState, useMemo, useCallback } from 'react'
import './App.css'

function SortedList({ list, sortFunc }) {
  console.log("Rendering SortedList");

  const sortedList = useMemo(() => {
    console.log("Running Sorting");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return (
    <div> Sorted List : {sortedList.join(', ')} </div>
  );
}

// const sortFunc = (a, b) => a.localeCompare(b) * -1; 

function App() {

  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(() => ['John', 'Shane', 'Ringo', 'Paul']);
  //  const sortedNames = [...names].sort();
  const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // const countTotal = useMemo(() => count1 + count2, [count1, count2]);
  const countTotal = count1 + count2;

  // const sortFunc = (a, b) => a.localeCompare(b) * -1; 
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);


  return (
  <div className="App">

    <div> Total : {total} </div>
    <div> Names : {names.join(', ')} </div>
    {/* <div> Sorted Names : {sortedNames.join(', ')} </div> */}

    <SortedList list={names} sortFunc={sortFunc} />
    {/* <SortedList list={names} sortFunc={(a, b) => a.localeCompare(b) * -1} /> */}

    <div><button onClick={() => setCount1(count1 + 1)}> Count 1 : {count1} </button></div>
    <div><button onClick={() => setCount2(count2 + 1)}> Count 2 : {count2} </button></div>

    <div> Count Total : {countTotal} </div>


  </div>




  );
}

export default App
