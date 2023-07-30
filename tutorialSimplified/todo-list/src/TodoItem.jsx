function TodoItem(id,title,completed, toggleTodo, deleteItem) {
  return (
        <li>
        <label><input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>{title}</label>
        <button className='btn btn-danger' onClick={() => deleteItem(id)}>Delete</button>
    </li>
  )
}

export default TodoItem