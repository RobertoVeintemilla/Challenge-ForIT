import { useState, useEffect } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks'
import TaskItem from '../components/TaskItem'
import TaskForm from '../components/TaskForm'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])
  
  const fetchTasks = async() => {
    try {
      const data = await getTasks();
      setTasks(data)
      console.log(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false)
    }
  }

  const handleAddTask = async (newTaskData) => {
    try {
      const addedTask = await createTask(newTaskData)
      setTasks([...tasks, addedTask])
    } catch (err) {
      setError(err.message)
    }
  }

  const handleUpdateTask = async (updatedTaskData) => {
    try {
      const response = await updateTask(editingTask.id, updatedTaskData)
      setTasks(tasks.map (task =>
        task.id === editingTask.id ? {...task, ...response} : task
      ))
      setEditingTask(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  const handleToggleComplete = async (id) => {
    const taskToToggle = tasks.find(task => task.id === id)
    if (!taskToToggle) return

    const updatedCompletedStatus = !taskToToggle.completed
    try {
      const response = await updateTask(id, { completed: updatedCompletedStatus})
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: response.completed} : task
      ))      
    } catch (err) {
      setError(err.message)
    }
  }

  const handleEditClick = (task) => {
    setEditingTask(task)
  }

  const handleCancelEdit = () => {
    setEditingTask(null)
  }

  if (loading) return <div>Cargando tareas...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='task-list-container'>
      <h1>Lista de tareas</h1>

      <h2>{editingTask ? 'Editar Tarea' : 'Agregar nueva tarea'}</h2> 
      <TaskForm 
        currentTask={editingTask}
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        onCancel={editingTask ? handleCancelEdit : null}
      />

      <div className='tasks-grid'>
        {tasks.length === 0 ? (
          <p>No hay tareas áun, agregar una nueva!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem 
              key={task.id}
              task={task}
              onEdit={handleEditClick}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TaskList