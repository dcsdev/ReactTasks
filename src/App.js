import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState, useEffect} from 'react'
import AddTask from "./components/AddTask";


function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}



//Remove Task
const deleteTask = (id) => {
  console.log( `Delete Task with Id ${id}`);

  setTasks(tasks.filter((task) => task.id !== id));
  
}

const toggleReminder = (id) => {
  console.log(`Toggle Reminder for id ${id}`);
  //setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  setTasks(
    tasks.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}
  return (
    <div className="container">
     <Header onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker" />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? (<Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks} /> ) : ('No Taks To Show')}
     
    </div>
  );
}

export default App;
