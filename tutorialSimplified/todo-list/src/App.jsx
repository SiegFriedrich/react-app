import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './styles.css'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    });
  }

  function addTodo(newItem) {
    setTodos([...todos, {id: crypto.randomUUID(), title: newItem, completed: false}]);
      
  }

  function deleteItem(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    });
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteItem={deleteItem}/>
    </>
  )
}

export default App
