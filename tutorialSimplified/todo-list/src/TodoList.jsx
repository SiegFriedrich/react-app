import TodoItem from './TodoItem'

function TodoList({todos, toggleTodo, deleteItem}) {
  return (
    <ul className="list">
    {todos.length === 0 && 'No Todos'}
    {todos.map( todo => {
        return (    
            <TodoItem {...todo} key={todo.id}  toggleTodo={toggleTodo} deleteItem={deleteItem}/>
        )
        })}
    </ul>
  )
}

export default TodoList