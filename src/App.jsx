import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Column from './components/Column/Column'

function App() {
  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask() {
    if (!task) return

    const newTask = {
      id: Date.now(),
      title: task,
      status: 'todo'
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  function moveTask(id, newStatus) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: newStatus
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function editTask(id) {
    const taskToEdit = tasks.find(task => task.id === id)

    const newTitle = prompt('Editar tarefa:', taskToEdit.title)

    if (!newTitle) return

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />

      <div className="task-form">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAddTask}>
          Adicionar
        </button>
      </div>

      <main className="board">
        <Column
          title="To Do"
          tasks={tasks.filter(task => task.status === 'todo')}
          moveTask={moveTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <Column
          title="Doing"
          tasks={tasks.filter(task => task.status === 'doing')}
          moveTask={moveTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <Column
          title="Done"
          tasks={tasks.filter(task => task.status === 'done')}
          moveTask={moveTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </main>
    </div>
  )
}

export default App