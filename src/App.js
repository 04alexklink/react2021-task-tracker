import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
  getTasks()
  }, [])

  const fetchTasks = async() => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data;
  }
  const fetchTask = async(id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data;
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    //Alternative way to update tasks list. Calling the method that gets all tasks from server
    // const tasksFromServer = await fetchTasks()
    // setTasks(tasksFromServer)
  }

const showAddTaskForm = () => {
  setShowAddTask(!showAddTask)
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => {
    if(task.id !== id) {
      return task
    }
  }))
}

const toggleReminder = async (id) => {
  const taskToUpdateReminder = await fetchTask(id)
  // await console.log(taskToUpdateReminder, "Task to update reminder")
  const updTask = await { ...taskToUpdateReminder, reminder: !taskToUpdateReminder.reminder }
  // await console.log(updTask, "Updated Task")
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data = await res.json()
  setTasks(tasks.map((task) => task.id === id ?
  {...task, reminder: data.reminder} : task))
}

  return (
    <div className="container">
      <Header title="Task Tracker" showAddTaskForm={showAddTaskForm} showAddTaskValue={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}/> : "No tasks to show"}
    </div>
  );
}

export default App;
