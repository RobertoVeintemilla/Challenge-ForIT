const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <small>Creado: {new Date(task.createdAt).toLocaleDateString()}</small>
      <div className='task-actions'>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Marcar Incompleto' : 'Marcar Completo'}
        </button>
        <button onClick={() => onEdit(task)}>Editar</button>
        <button onClick={() => onDelete(task.id)}>Borrar</button>
      </div>
    </div>
  )
}

export default TaskItem;