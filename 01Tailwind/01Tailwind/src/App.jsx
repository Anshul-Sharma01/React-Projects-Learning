import './App.css'
import Card from './components/Card'
import { useState } from 'react'



function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1 className='bg-green-700 text-fuchsia-300 p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username='Anshul Sharma'/>
      <button onClick={addValue}>Add Value : {counter}</button>
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  )
}

export default App
