import './Column.css'

function Column({ title, tasks }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tasks.map(task => (
        <div className="task-card" key={task.id}>
          {task.title}
        </div>
      ))}
    </div>
  )
}

export default Column