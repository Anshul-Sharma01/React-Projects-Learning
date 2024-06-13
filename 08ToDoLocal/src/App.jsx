import { useState } from 'react'
import { TodoProvider } from './contexts';


function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    
  }

  return(
    <TodoProvider value={{todos, addTodo, updateTodo, deletetodo, toggleComplete}}>
      <div className="bg-slate-700 min-h-screen py-8 rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-4xl font-bold font-mono text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
          </div>
          <div className="flex flex-wrap gap-y-3">
           {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
