const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks')
  }
  return response.json()
}

export const createTask = async (task) => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task)
  });
  if (!response.ok) {
    throw new Error('Failed to create task')
  }
  return response.json()
}

export const updateTask = async (id, updatedTask) => {
  const response = await fetch (`${API_BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask)
  });
  if(!response.ok) {
    throw new Error('Failed to update task')
  }
  return response.json()
}

export const deleteTask = async (id) => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('Failed to delete task')
  }
}