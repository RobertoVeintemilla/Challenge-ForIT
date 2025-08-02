import {useState, useEffect } from 'react';

const TaskForm = ({ currentTask, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (currentTask){
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setCompleted(currentTask.completed)
    } else {
      setTitle('');
      setDescription('');
      setCompleted('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, completed });
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
          type="text"
          placeholder="Titulo tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
      />
      <textarea
        placeholder='Descripción tarea'
        value = {description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {currentTask && (
        <label>
          <input 
            type='checkbox'
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
      )}
      <div className='form-actions'>
        <button type="submit">{currentTask ? 'Actualizar tarea' : 'Agregar tarea'}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
      </div>
    </form>
  )
}

export default TaskForm