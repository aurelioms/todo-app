import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './components';
import TodoItem from './components/todo/item';


function App() {
  const [inputedTodo, setInputedTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoHistory, setTodoHistory] = useState(false);

  const handleSubmit = (event) => {
    /**
     * untuk menghilangkan sifat native dari event dari suatu HTML Node.
     * event.preventDefault() digunakan pada kondisi untuk mencegah sifat native onSubmit pada form
     * agar tidak redirect ke url action.
     */
    event.preventDefault()
    const todo = {
      id: uuidv4(),
      title: inputedTodo,
      expiryDate: ''
    }
    setTodos((prevState) => [...prevState, todo])
    setInputedTodo('')
  }

  const updateTodo = (id, updatedTitle) => {
    const currentTodos = todos.map((todo, index) => {
      if (todo.id !== id) {
        return todos[index]
      }
      return {
        id: todo.id,
        title: updatedTitle,
      }
    })
    setTodos(currentTodos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const selectTodo = () => {
    setTodoHistory(!todoHistory)
  }

  return (
    <div className="w-full flex flex-col">
      <header className="px-8 py-3">
        <nav>
          <h1 className="font-bold text-4xl text-purple-800">React Todo</h1>
        </nav>
      </header>
      <div className="flex flex-col items-center mt-4">
        <form className="w-96 mt-8" onSubmit={handleSubmit}>
          <Input
            name="title"
            placeholder="Todo title"
            value={inputedTodo} // value bergantung langsung dengan state value dari onChange
            setValue={setInputedTodo}
          />
        </form>
      </div>
      <div className="flex flex-col items-center mt-4 gap-3">
        {!todoHistory && todos.map((todo) => (
          <TodoItem
            key={`#todos-${todo.id}`}
            currentTodo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default App
