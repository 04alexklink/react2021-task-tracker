import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
  const fetchTasks = async() => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    console.log(data)
  }
  fetchTasks()
  }, [])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

const showAddTaskForm = () => {
  setShowAddTask(!showAddTask)
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => {
    if(task.id !== id) {
      return task
    }
  }))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ?
  {...task, reminder: !task.reminder} : task))
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
