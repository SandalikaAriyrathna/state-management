import { useReducer } from 'react'

import './App.css'

function UserForm() {

  const [state, dispatch] = useReducer(

    (state, action) => ({
      ...state,
      ...action,
    }), {
    first: "",
    last: ""
  })

  return (

    <div>
      <input type="text" value={state.first} placeholder='First Name' onChange={(e)=> dispatch({first: e.target.value})} />
      <input type="text" value={state.last} placeholder='Last Name' onChange={(e)=> dispatch({last: e.target.value})} />

      <div>First Name = {state.first}</div>
      <div>Last Name = {state.last}</div>



    </div>

  );
}


function NameList() {

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "SET_NAME":

        return { ...state, name: action.payload }

      //or
      // state.name = action.payload
      // return {...state}

      case "ADD_NAME":
        return {
          ...state,
          names: [...state.names, state.name],
          name: ""
        }
    }
  }, {
    names: [],
    name: "",

  })

  return <div className="App">

    <div>
      {state.names.map((name, index) => <div key={index}>{name}</div>)}
    </div>

    <input type="text" value={state.name}

      onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
    <div>Name = {state.name}</div>
    <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>

  </div>


}

function App() {
  return (
    <div className="App">
      <NameList />
      <UserForm />
    </div>
  )
}

export default App
